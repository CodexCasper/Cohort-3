import { useEffect, useState } from 'react';
import "./App.css"


function App(){

    const[ inputvalue, setinputvalue ] = useState( " " );

    const debouncedValue = useDebounce(inputvalue);

    function changefn(input){
        setinputvalue( input.target.value );
    }

    useEffect( () => {
        // expensive operation
        // fetch 
        console.log("Exclusive Operation"); // Perform an operation based on the debounced value
    }, [debouncedValue]);

/*
function useDebounce(originalfn) {

    const CurrentClock = useRef();

    const fn = () => {
        clearTimout( CurrentClock.current );
        CurrentClock.current = setTimeout(originalfn, 5000);
    }

    return fn; 
}

function App(){

    function sendDataToBackend(){
        fetch("api.amazon.com/search/");
    }

    const debouncedFn = useDebounce( sendDataToBackend );

    */
    return (
        <>

        <input type='text' onChange={ changefn }></input>

        </>
    );
}

export default App;



// Notes:
// Debounce ek technique hai jo kisi function ke execution ko delay karti hai jab tak ek certain time period complete na ho jaye. Yeh uss situation mein kaam aata hai jab aapko frequent user actions (jaise typing, scrolling, resize events, etc.) ko optimize karna hota hai. React mein debounce ko implement karne ke liye custom hooks ka use kiya jata hai.