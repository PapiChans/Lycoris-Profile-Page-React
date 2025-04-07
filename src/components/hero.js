import '../App.css';
import React, { useState } from 'react';


function Hero() {

    const [pallete, setPallete] = useState('Chisato');

    const changePallete = (newPallete) => {
        setPallete(newPallete);
    }

    return (
        <>
            
        </>
    )
}

export default Hero;