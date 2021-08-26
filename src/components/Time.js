import React from 'react';

class Time extends React.Component {
    constructor(){
        super();

        this.state = {
            isSesion: true,
            timeSecond: 0,
            intervalId: 0
    }
    
    this.play = this.play.bind(this);
    this.decremento = this.decremento.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
}

    play () {
        let intervalId = setInterval(this.decremento, 1000);
        this.props.playStopTime(true);
        this.setState({
            intervalId: intervalId
        })
    }

    decremento() {
        switch (this.state.timeSecond) {
            case 0:
                if (this.props.timeMinute === 0) {
                    if (this.state.isSesion){
                        this.setState({
                            isSesion: false
                        });
                        this.props.intervaloAlterno(this.state.isSesion);
                    }else {
                        this.setState({
                            isSesion: true
                        });
                        this.props.intervaloAlterno(this.state.isSesion);
                    }
                } else {
                    this.props.timeActualizacion()
                    this.setState({
                    timeSecond: 59
                })
                }
                break;

            default:
                this.setState((prevState) => {
                    return {
                        timeSecond: prevState.timeSecond -1
                    }
                })
                break;
        }
    }

    stop () {
        clearInterval(this.state.intervalId);
        this.props.playStopTime(false);
    }

    reset () {
        this.stop();
        this.props.reseTime()
        this.props.playStopTime(false);
        this.setState({
            timeSecond: 0,
            isSesion: true
        });
    }


render() {
    return(
        <section>
            <section id="time">
                <h4>{this.state.isSesion === true ? "Sesión" :
                "Break"}</h4>
                <span>{this.props.timeMinute}</span>
                <span>:</span>
                <span>{this.state.timeSecond === 0 ? "00":
                this.state.timeSecond < 10 ? "0" +
                this.state.timeSecond:
                this.state.timeSecond}
                </span>
            </section>
            <section>
                <button onClick={this.play}>Play</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </section>
        </section>
    )
}
}

export default Time;