import React from "react";
import Aboutme from "./body/about-me.js";
import Portfolio from "./body/portfolio";
import Promo from "./body/promo";

export default function Body(){
    return(
        <div className="app-body">
            <Promo />
            <Portfolio />
            <Aboutme />            
        </div>
    )
}