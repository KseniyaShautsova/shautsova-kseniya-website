import React from "react";
import Cases from "./portfolio/cases";
import data from "../data";

export default function portfolio(){

    const posts= data.map(item => {
        return(
          <Cases
            key={item.id}
            {...item}
    
          />
        )
      })
      

    return(
        <div className="my-portfolio">
        <p id={'portfolio'} className="h2-text">My portfolio</p>
        <p className="h3-text">A small gallery of recent projects ;)</p>  
        <div className="portfolio-cases">
        {posts}     
        </div> 
    </div>
    )
}