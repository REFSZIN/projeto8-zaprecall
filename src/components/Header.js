import React from "react";

export default function Header () {
    return (
        <header  id="display" >
            <figure>
                <img className="logoHeader" src="../assets/image/logo.png" alt="logo"/>
            </figure>
            <figcaption className="descHeader">ZapRecall</figcaption>
        </header>
    );
};