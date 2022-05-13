export default function Footer(){
    return (
        <footer  id="display" >
        <section className="result">
            <figure className="resultMsg">
                <img src="./assets/images/party.png" alt="Emotions"/>
                <figcaption>Parabéns!</figcaption>
            </figure>
            <h4>Você não esqueceu de nenhum flashcard!</h4>
        </section>
        <section className="followUp">
            <h3>0/4 CONCLUÍDOS</h3>
            <article className="iconsMarkHist">
                <ion-icon id="display" name="checkmark-circle"></ion-icon>
                <ion-icon id="display" name="close-circle"></ion-icon>
                <ion-icon id="display"name="close-circle"></ion-icon>
                <ion-icon id="display" name="help-circle"></ion-icon>
            </article>
        </section>
        <button  className="btnreload">REINICIAR RECALL</button>
    </footer>
    );
};