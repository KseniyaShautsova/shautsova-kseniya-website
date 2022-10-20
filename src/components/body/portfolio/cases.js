import React from "react";

export default function cases(props){
    return(
        <div className="portfolio-case">
            <p className="cases-title">{props.title}</p>
            <p className="cases-link">click to open:</p>
            <a href={props.linkN}><img src={props.img} className="cases-img" alt="cases"/></a>
            <p className="cases-link"><a href={`https://github.com/KseniyaShautsova/${props.link}`}>more about the project on GitHub</a></p>
        

        </div>
    )
}