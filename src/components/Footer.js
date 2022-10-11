import React from "react";
import ln from "../components/img/linkedin.png";
import git from "../components/img/github.png";
import mail from "../components/img/mail.png";

export default function Footer(){
    return(
        <div className="app-footer">
             <div className="contact-me">
                <p id={'contact-me'} className="h2-text-gr">Contact me</p>
                <p className="h3-text-gr">If you want to know me better, here is where you can find me: </p>   
                <div className="footer-icons">
                   <ul>
                   
                   <li><a href="https://www.linkedin.com/in/kseniya-shautsova/"><img className="foot-icon" src={ln} alt="linkedin"/></a></li> 
                   <li><a href="https://github.com/KseniyaShautsova"><img className="foot-icon" src={git} alt="github"/></a></li>
                   <li><a href="mailto:shautsovakseniya@gmail.com"><img className="foot-icon" src={mail} alt="mail"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}