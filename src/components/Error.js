import { useRouteError } from "react-router";
import Header from "./Header";

const Error = () => {
    const err = useRouteError();
    //.log(err)
    return (
        <div>
            <Header/>
            <h1>{err.status}: {err.statusText}</h1>
        </div>
    );
}

export default Error;