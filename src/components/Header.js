import React from "react";
import { Link } from "react-router-dom";
export default function Header () {
    return (
        <header>
            <Link to={"/"}><figure>
                <img className="logoHeader" src="../assets/images/logo.png" alt="logo"/>
            </figure></Link>
            <Link to={"/"}><figcaption className="descHeader">ZapRecall</figcaption></Link>
        </header>
    );
};