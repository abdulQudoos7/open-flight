import React, { useEffect } from "react";
import Beer from "../beers/Beer";
import Api from "../beers/Api";

const Home = () => {
    return (
        <>
            <h1>"this is home component"</h1>
            <Beer></Beer>
            {/* <Api></Api> */}
        </>
    )
}

export default Home;