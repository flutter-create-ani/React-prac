import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <h2>This side Aniket Kumar</h2>
            {/* <User name={"Aniket"} location={"Ghaziabad"}/> */}
            <UserClass name={"Ankit"} location={"Haldia"}/>
        </div>
    );
}
export default About;