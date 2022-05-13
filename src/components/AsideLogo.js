import React from "react";
import Logo from "../assets/images/logo.png"
export default function LogoAside(){
    return(
        <>
            <figure>
                <img className="logoAside" src={Logo} alt="logo-aside"/>
            </figure>
            <figcaption>ZapRecall</figcaption>
        </>
    );
};