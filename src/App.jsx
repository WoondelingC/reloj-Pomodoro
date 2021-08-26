import React, { useState } from 'react'

const App = () => {
    const [Time, setTime]= useState(25*60);

    const formatoTime = (time) =>{
        let minutos = Math.floor(time/60);
        let secundos = time % 60;
        return(
            (minutos < 10 ? "0" + minutos:minutos)+":" +
            (secundos < 10 ? "0" + secundos:secundos)            
        );
    };

    return (
        <div>
            <Length 
            title={"break length"}
            changeTime={null}
            type={"break"}
            time={null}
            formatoTime={formatoTime} />

            <h1>{formatoTime(Time)}</h1>
        </div>
    )
}

export default App
