
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    price,
    type,
    provider_name,
    category_name,
    provider_image
  } = resData;
  //console.log(provider_image)
  
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={provider_image}
      />
      <h3>{name}</h3>
      <h4>{type}</h4>
      <h4>{provider_name} stars</h4>
      <h4>₹{price} FOR TWO</h4>
      <h4>{category_name} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
