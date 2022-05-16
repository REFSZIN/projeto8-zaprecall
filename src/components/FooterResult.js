import React from 'react';
export default function FooterResult (props){
    const {erradas, soma, totalQuests} = props;
    if(soma === totalQuests) {
        return(
            <section className="result">
                {
                    !erradas 
                    ? (
                        <>
                        <figure className="resultMsg">
                            <img src="/assets/images/party.png" alt="Emotions"/>
                            <figcaption>Parabéns!</figcaption>
                        </figure>
                        <h4>Você não esqueceu de nenhum flashcard!</h4>
                        </>
                    )
                    : (
                        <>
                        <figure className="resultMsg">
                            <img src="/assets/images/sad.png" alt="Emotions"/>
                            <figcaption>Putz!</figcaption>
                        </figure>
                        <h4>Você esqueceu de <br/>algum flashcard!</h4>
                        </>
                        
                    )
                }
            </section>
        );
    }
    
};