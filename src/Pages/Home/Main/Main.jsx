import React from "react";
import Home1 from '../Home1/Home1'
// import Home2 from "../Home2/Home2";
import Home3 from "../Home3/Home3";
import Home4 from "../Home4/Home4";
import Home6 from "../Home6/Home6";
import Uslug from '../Uslug/Uslug'
import Uslug2 from '../Uslug2/Uslug2'
import Review from "../Review/Review";

function Main() {
    return(
        <>
            <Home1/>
            {/* <Home2/> */}
            <Uslug/>
            <Uslug2/>
            <Home3/>
            <Home4/>
            <Home6/>
            <Review/>

        </>
    )
}

export default Main;