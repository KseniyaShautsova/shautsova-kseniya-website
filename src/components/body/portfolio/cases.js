import React from "react";

export default function cases(props){
    return(
        <div className="portfolio-case">
            <p className="cases-title">{props.title}</p>
            <img src={props.img} className="cases-img" alt="cases"/>
            <p className="cases-text">Used technologies: {props.text}</p>
            <p className="cases-link"><a href={`https://github.com/KseniyaShautsova/${props.link}`}>more</a></p>
        

        </div>
    )
}