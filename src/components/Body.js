import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  // console.log(useEffect);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://services.broki.in/api/service-list?per_page=all&status=1"
    );
    //console.log(data);
    const json = await data.json();
   // console.log(json);
    // Optional Chaining
    setListOfRestraunt(
      json?.data
    );
    setFilteredRestaurant(json?.data);
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return (<h1>Oops check your internet connection</h1>) 
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              //console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
              {
                return res.name.toLowerCase().includes(searchText.toLowerCase());
              }
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.price <= 20000
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
