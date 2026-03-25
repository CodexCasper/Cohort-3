import { useState, useEffect, useRef } from 'react';

export const usePrev = (value) => { // 1 => 2

    //useRef hook here stores our value in a variable and when the value changes it doesn't re-render but useState does 
    const ref = useRef(); // sytep2. initialozed to 0 initially 

    //let's say the value of counter changed from 1 to 2 and 'ref' stores it and dependency array will trigger to re-render useEffect to update the 'ref.current' value but 
    // there exists a property of react that first return then update so it updates the value later 
    useEffect( () => {

        ref.current = value;// step3. after returning undefined it became 0 and then updates to 1 when ref.current returns 0
//here it doesn't re-render bccoz we are using useRef hook here  
    }, [value]);

    //this return the previous value '1' first 
    return ref.current; // step3. return undefined 

}