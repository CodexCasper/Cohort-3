import "./App.css"
import { useRef, useState } from 'react';

function App(){
   // Return the JSX of the component
  return (
    // Create a div element
    <>
        {/* Render the FocusInput component */}
        <focusOnInput />
    </>
  );
}

  // Create a Ref to store a input element 
  const InputReference = useRef();

  const focusOnInput = () => {

    // In react we should not fetch our DOM element raw like below (naive way) instead we use 'useref'
    document.getElementById("Name").focus()   //  {/*basically when we click on submit button the focus gets shifted to input box having id "Name" */}

    InputReference.current.focus();               //instead we used useRef hook to pass reference value , Access the DOM node and call the focus method 
    // UseCase : Focussing on an input box  
  }


  return(
    <div>
      Sign Up

      {/* Attaching the ref to the input element  */}
      <input ref={InputReference} id="Name" type={"text"}></input>

      <input id="no." type={"text"}></input>

      <button onClick={focusOnInput}>submit</button>
    </div>
  )


export default App