import React, { useState } from 'react';
export default function MainQuest(props){
    const [first,setFirst] = useState(false);
    const [second,setSecond] = useState(false);
    const [ clicked, setClicked ] = useState(false);
    const {
        corretas, erradas, medianas, setCorretas, setErradas, setMedianas , setIcons, icons
    } = props;

    const click = (type) => {
        setFirst(false);
        setSecond(false);
        if(type === 'close-circle') {
            setErradas(erradas+1);
            setIcons([...icons , "close-circle"])
        };
        if(type === 'help-circle') {
            setMedianas(medianas+1);
            setIcons([...icons , "help-circle"])
        }
        if(type === 'checkmark-circle') {
            setCorretas(corretas+1)
            setIcons([...icons , "checkmark-circle"])
        }
    };
    const outlineColor = () => {
        if(icons[props.num-1] === "checkmark-circle"){
            return <h2 className='clickedcorret'>Pergunta {props.num}</h2>
        }if(icons[props.num-1] === "help-circle"){
             return <h2 className='clickedmaybe'>Pergunta {props.num}</h2>
        }else{
            return <h2 className='clickedrong'>Pergunta {props.num}</h2>
        }
    } 
    const  renderButtons = () =>{
        return(
            <div className="questLate">
                <h6>{props.resposta}</h6>
                <article className="options">
                    <button onClick={() => click('close-circle')} className="btnQuestRed">Não <br/> lembrei</button>
                    <button onClick={() => click('help-circle')} className="btnQuestOrange">Quase não <br/>lembrei</button>
                    <button onClick={() => click('checkmark-circle')} className="btnQuestGreen">Zap!</button>
                </article>
            </div>
        );
    };
    const renderQuestion = () => {
        return (          
            <article className="questMid">    
                { !second
                ? (
                    <article className="question">
                        <h5>{props.questao}</h5>
                        <ion-icon name="refresh" onClick={() => setSecond(true)}></ion-icon>
                    </article>
                ) 
                : renderButtons() }
            </article>
        )};

        const renderCard = () => {
            return (
                <article className="numberQuest"> 
                    { !clicked 
                        ? (
                            <>
                                <h2>Pergunta {props.num}</h2>
                                <img
                                className="play"
                                src="./assets/images/play.svg"
                                alt="Play" 
                                onClick={() => {
                                    setFirst(true);
                                    setClicked(true);
                                }}/>
                            </>
                        )
                        : (
                            <>
                                {outlineColor()}
                                <ion-icon name={icons[props.num-1]}></ion-icon>
                            </>
                        )
                    }
                </article>
            );
        };

    return(
        <section className="quest">
            { !first ? renderCard() : renderQuestion() }
        </section>
    );
};