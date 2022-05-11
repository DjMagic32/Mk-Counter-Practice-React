import React  from "react";
import './styles/button.css';
import styled from "styled-components";

/* Preguntar a riki sobre como utilizar style component con clasesName condicionadas
por lo menos en este caso */
const ButtonCounter = styled.button`
    width: 250px;
    height: 80px;
    font-family: 'Press Start 2P';
    font-weight: bold;
    color: #D9D9D9;
    border: 2px solid white;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
    font-size: 15px;

`;

const Button = ({ text, isClickButton, jandleClicks }) => {
    return(
        
        <ButtonCounter 
        onClick={jandleClicks}
        className={ isClickButton ? 'boton-click':'boton-reininciar'}
        >
            {text}
        </ButtonCounter>

    );
};

export default Button;