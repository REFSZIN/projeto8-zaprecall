import React from 'react';
export default function MainQuest(props){
    return(
        <section className="quest">
            <article className="numberQuest"> 
                <h2>Pergunta {props.num}</h2>
                <img  className="play" src="./assets/images/play.svg" alt="Play"/>
            </article>
            <article id="display" className="questMid">
                <article id="display" className="question">
                    <h5>{props.questao}</h5>
                    <ion-icon name="refresh"></ion-icon>
                </article>  
                <div id="display" className="questLate">
                    <h6>{props.resposta}</h6>
                    <article className="options">
                        <button className="btnQuestRed">Não lembrei</button>
                        <button className="btnQuestOrange">Quase não <br></br>lembrei</button>
                        <button className="btnQuestGreen">Zap!</button>
                    </article>
                </div>
            </article>
        </section>
    );
};