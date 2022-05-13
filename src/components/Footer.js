import React from "react";
import FooterFollowUp from "./FooterFollowUp";
import FooterResult from "./FooterResult";

export default function Footer(){
    return (
        <footer  id="display" >
            <FooterResult />
            <FooterFollowUp />
            <button  className="btnreload">REINICIAR RECALL</button>
        </footer>
    );
};