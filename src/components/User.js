import {useState} from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count1] = useState(1);
    const {name, location} = props;
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count1 : {count1}</h1>
            <h1>{name}</h1>
            <h2>{location}</h2>
        </div>
    );
}

export default User;