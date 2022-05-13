import React from "react";
export default function AsideInputs (){
    return(
        <>
            <input className="inputZaps"  placeholder="Digite sua meta de zaps..." type="number" name="numerosZaps" id="display"/>
            <input className="inputDeck"  placeholder="Escolha seu deck" type="search" name="deck" id="display"/>
            <button onClick={{}} className="btnAside" type="submit">Iniciar Recall!</button>
        </>
    );
};