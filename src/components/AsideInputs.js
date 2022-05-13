import React from "react";
export default function AsideInputs (){
    
    return(
        <>
            <input id="display" className="inputZaps" placeholder="Digite sua meta de zaps..." type="number" name="numerosZaps"/>
            <input id="display" className="inputDeck"  placeholder="Escolha seu deck" type="search" name="deck"/>
            <button className="btnAside" type="submit">Iniciar Recall!</button>
        </>
    );
};