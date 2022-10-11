import React from "react";
import logo from "../components/img/logo.png";
import ln from "../components/img/linkedin.png";
import git from "../components/img/github.png";
import mail from "../components/img/mail.png";

export default function Header(){
    return(
        <div className="app-header">
                <div className="header-logo">
                <a href="https://www.linkedin.com/in/kseniya-shautsova/"><img className="logo-img" src={logo} alt="logo-img"/></a>
                <div className="logo-text">
                <p className="h3-text-white">Kseniya</p>
                <p className="h3-text-white">Shautsova</p>
                </div>
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li><a href='#portfolio'>portfolio</a></li>
                        <li><a href='#about-me'>about-me</a></li>
                        <li><a href='#contact-me'>contact</a></li>
                    </ul>
                </div>
                <div className="navbar-icons">
                   <ul>
                   
                   <li><a href="https://www.linkedin.com/in/kseniya-shautsova/"><img className="nav-icon" src={ln} alt="linkedin"/></a></li> 
                   <li><a href="https://github.com/KseniyaShautsova"><img className="nav-icon" src={git} alt="github"/></a></li>
                   <li><a href="mailto:shautsovakseniya@gmail.com"><img className="nav-icon" src={mail} alt="mail"/></a></li>
                    </ul>
                </div>
        </div>
    )
}