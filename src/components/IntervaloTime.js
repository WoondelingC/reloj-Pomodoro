import React from 'react';

function IntervaloTime (props) {
    const decremento = ()=> {
        if (props.intervaloTime ===1) {
            return;
        }
        props.decreaseBreak();
    }

    const incremento = () =>{
        if(props.sesionTime === 60) {
            return;
        } 
        props.increaseBreak();
    }

    return (
        <section className="item">
            <button onClick={decremento}>Down</button>
            <p className="number">{props.intervaloTime}</p>
            <button onClick={incremento}>Up</button>
        </section>    
    );
}

export default IntervaloTime;