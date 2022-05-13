export default function Main (){
    return(
        <main  id="display" >
            <section className="quest">
                <article className="numberQuest"> 
                    <h2>Pergunta 1</h2>
                    <img  className="play" src="./assets/images/play.svg" alt="Play"/>
                </article>
                <article id="display" className="questMid">
                    <article id="display" cle  className="question">
                        <h5>O que é JSX?</h5>
                        <ion-icon name="refresh"></ion-icon>
                    </article>  
                    <div id="display" className="questLate">
                        <h6>JSX é uma sintaxe para escrever HTML dentro do JS</h6>
                        <article className="options">
                            <button className="btnQuestRed">Não lembrei</button>
                            <button className="btnQuestOrange">Quase não <br></br>lembrei</button>
                            <button className="btnQuestGreen">Zap!</button>
                        </article>
                    </div>
                </article>
            </section>
            
        </main>
    );
};