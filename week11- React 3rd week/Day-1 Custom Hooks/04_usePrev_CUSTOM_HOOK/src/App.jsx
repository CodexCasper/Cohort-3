import { useState } from "react";
import './App.css'
import { usePrev } from "./hooks/usePrev"

function App(){

  const[state, setstate] = useState(0);

  // usePrev hook put the previous value of state in prev, means it is taking the current state and somehow remembering the previous value 
  const prev = usePrev(state); // workflow => step1. called with 0

  return (
      <>

      <p>{ state }</p>
      <button 
      onClick={ () => {
        setstate( (current) => current + 1);
      }}>
        Increase Count
      </button>
      <p>the previous value was { prev }</p>

    </>
  );

}

export default App;