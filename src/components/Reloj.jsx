import React from 'react'
import IntervaloTime from './IntervaloTime';
import SesionTime from './SesionTime';
import Time from './Time'
import '../style.css';


class Reloj extends React.Component {
    constructor (){
        super();
    
        this.state = {
        breakLength: 5,
        sesionLength: 25,
        timeMinute: 25,
        isPlay : false
        }
        
        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);

        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);

        this.onIncreaseSesionLength = this.onIncreaseSesionLength.bind(this);

        this.onDecreaseSesionLength = this.onDecreaseSesionLength.bind(this);

        this.intervaloAlterno = this.intervaloAlterno.bind(this);

        this.onTimeActualizacion = this.onTimeActualizacion.bind(this);

        this.onResetTime = this.onResetTime.bind(this);

        this.playStopTime = this.playStopTime.bind(this);
    };

    

    onIncreaseBreakLength() {
        this.setState(prevState=> { 
            return{
                breakLength:prevState.breakLength + 1
            }
        })
    }

    onDecreaseBreakLength() {
        this.setState(prevState=> { 
            return{
                breakLength:prevState.breakLength - 1
            }
        })
    }

    onIncreaseSesionLength() {
        this.setState(prevState=> { 
            return{
                sesionLength:prevState.sesionLength + 1,
                timeMinute:prevState.sesionLength + 1
            }
        })
    }

    onDecreaseSesionLength() {
        this.setState(prevState=> { 
            return{
                sesionLength:prevState.sesionLength - 1,
                timeMinute:prevState.sesionLength - 1
            }
        })
    }

    onTimeActualizacion() {
        this.setState((prevState) =>{
            return {
                timeMinute: prevState.timeMinute -1
            }
        })
    }

    intervaloAlterno (sesion) {
        if (sesion){
            this.setState({
                timeMinute:this.state.sesionLength
            }) 
        } else{
            this.setState({
                timeMinute: this.state.breakLength
            })
        }
        
    }

    onResetTime() {
        this.setState({
            timeMinute: this.state.sesionLength
        })
    }

    playStopTime(isPlay) {
        this.setState({
            isPlay: isPlay
        });
    }


    render() {

        return(
            <div className="contenedor">
                <h1>Reloj Pomodoro</h1>
                <div className="content">

                <IntervaloTime isPlay ={this.state.isPlay}
                intervaloTime={this.state.breakLength}
                increaseBreak={this.onIncreaseBreakLength}
                decreaseBreak={this.onDecreaseBreakLength} />

                <SesionTime isPlay ={this.state.isPlay}
                sesionTime={this.state.sesionLength}
                increaseSesion={this.onIncreaseSesionLength}
                decreaseSesion={this.onDecreaseSesionLength} />
                </div>

                <Time timeMinute={this.state.timeMinute}
                breakLength={this.state.breakLength}
                timeActualizacion={this.onTimeActualizacion}
                intervaloAlterno = {this.intervaloAlterno}
                reseTime = {this.onResetTime}
                playStopTime ={this.playStopTime} />
            </div>
        );
    }
}

export default Reloj
