import Emogi from "../assets/images/party.png"
export default function FooterResult (){
    return(
        <section className="result">
            <figure className="resultMsg">
                <img src={Emogi} alt="Emotions"/>
                <figcaption>Parabéns!</figcaption>
            </figure>
            <h4>Você não esqueceu de nenhum flashcard!</h4>
        </section>
    );
};