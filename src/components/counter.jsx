import React  from "react";
import styled from "styled-components";
const Contador = styled.div`
    min-width: 300px;
    height: 300px;
    font-size: 160px;
    padding: 25px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 8px solid white;
    margin-bottom: 15px;

`;

const CounterDisplay = ({ numberClicks }) => {
    return(
        <Contador>
            {numberClicks}
        </Contador>
    );

    
};

export default CounterDisplay;