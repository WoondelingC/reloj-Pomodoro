import React from 'react'

const SesionTime = (props) => {

    const decrementoSesion = ()=> {
        if (props.intervaloTime ===1) {
            return;
        }
        props.decreaseSesion();
    }

    const incrementoSesion = () =>{
        if(props.sesionTime === 60) {
            return;
        } 
        props.increaseSesion();
    }

    return (
        <div className="item">
            <button onClick={decrementoSesion}>Down</button>
            <p className="number" >{props.sesionTime}</p>
            <button onClick={incrementoSesion}>Up</button>

        </div>
    )
}

export default SesionTime;

