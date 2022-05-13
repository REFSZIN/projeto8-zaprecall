import React , {useState} from "react";
import MainQuest from "./MainQuest";
import { quests } from "../data/indexdata";

export default function Main (){
    
    return(
        <main id="display" >
            {quests.map((item, index) => <MainQuest key={index} num={item.num} questao={item.questao} resposta={item.resposta} />)}
        </main>
    );
};