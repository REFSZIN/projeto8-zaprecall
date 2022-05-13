export default function Aside(){
    return(
        <aside>
            <figure>
                <img className="logoAside" src="./assets/images/logo.png" alt="logo-aside"/>
            </figure>
            <figcaption>ZapRecall</figcaption>
            <input  className="inputZaps" placeholder="Digite sua meta de zaps..." type="number" name="numerosZaps" id="display"/>
            <input className="inputDeck"  placeholder="Escolha seu deck" type="search" name="deck" id="display"/>
            <button className="btnAside" type="submit">Iniciar Recall!</button>
        </aside>
    );
};