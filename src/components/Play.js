import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { quests } from "../data/indexdata";

export default function Play (){
    const [ corretas, setCorretas ] = useState(0);
    const [ erradas, setErradas ] = useState(0);
    const [ medianas, setMedianas ] = useState(0);
    const [ icons, setIcons ] = useState([]);
    const totalQuests = quests.length;
    const baralho = quests.sort(() => Math.random() - 0.5);
    
    return(
        <>
            <Header />
            <Main corretas={corretas} erradas={erradas} medianas={medianas} setCorretas={setCorretas} setErradas={setErradas} setMedianas={setMedianas} baralho={baralho} setIcons={setIcons} icons={icons} />
            <Footer corretas={corretas} erradas={erradas} medianas={medianas} totalQuests={totalQuests} icons={icons} />
        </>
    )
}