import React from "react";
import { Link } from "react-router-dom";
import FooterFollowUp from "./FooterFollowUp";
import FooterResult from "./FooterResult";

export default function Footer(props){
    const { corretas, erradas, medianas, totalQuests , icons } = props;
    const soma = corretas + erradas + medianas;
    const reload = () =>{
        window.reload(true)
    }
    return (
        <footer>
            <FooterResult erradas={erradas} soma={soma} totalQuests={totalQuests}/>
            <FooterFollowUp soma={soma} totalQuests={totalQuests} icons={icons}/>
            <Link to={"/"}><button  className="btnreload" onClick={() => reload()}>REINICIAR RECALL</button></Link>
        </footer>
    );
};