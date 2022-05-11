import React  from "react";
import styled from "styled-components";
import Button from "./button";
import CounterDisplay from "./counter";
import { useState } from "react";

const ContainerCounter = styled.div`
    height: 550px;
    min-width: 600px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;




const Counter = () => {

    const [numberClicks, setNumberClicks] = useState(0)

    const jandleClicks = () => {
        setNumberClicks(numberClicks + 1);
        console.log('Click');
    };
    
    const reCounte = () => {
        setNumberClicks (0)
        console.log ('Se reinincio contador')
        
    };
    

    return(
        <ContainerCounter>

            <CounterDisplay numberClicks={numberClicks} />
            
            <Button 
            text='Victories'
            isClickButton={true}
            jandleClicks={jandleClicks}/>

            <Button 
            text='Restart'
            isClickButton={false}
            jandleClicks={reCounte}/>

        </ContainerCounter>

    );
    
};


export default Counter;