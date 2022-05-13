import React from "react";
import Logo from "../assets/images/logo.png"
export default function Header () {
    return (
        <header  id="display" >
            <figure>
                <img className="logoHeader" src={Logo} alt="logo"/>
            </figure>
            <figcaption className="descHeader">ZapRecall</figcaption>
        </header>
    );
};