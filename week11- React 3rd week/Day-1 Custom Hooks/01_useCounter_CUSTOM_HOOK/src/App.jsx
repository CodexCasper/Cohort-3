// Custom Hooks are imp. for Interviews 

/*  WRONG WAYS TO DEFINE OR USE HOOK 

// INSIDE A NATIVE FUNCTION 
function getValue(){
const[value,setvalue] = useState(1);
} 

 // EITHER WE SHOULD USE A HOOK INN COMPONENT 
  function CounterComponent(){
  const[value,setcount] = useState();
  } 

  // OR WE SHOULD DEFINE OUR OWN CUSTOM HOOK(starts with "use")
  function useValue(){
  const[value,,setvalue] = useState();
  }
*/

import './App.css'
import { useState } from 'react'

// Created our Custom Hook where we will our main thing we are doing( where we once defined ki this thing exists ), kind of a function which we can use repeatedly in many components 
// custom hooks are powerful feature inn react that allows us to encapsulate( => means hide the internal logic and shows only what outside world needs ) and also reuse Stateful logic among differnt components
function useCounter(){

  // Declare state variable 'count' and its updater function 'setCount', initialized to 0
  const[count,setCount] = useState(0);

  function IncreaseCounter(){

    setCount ( count + 1);
//  setCount ( c => c + 1 ) , another way 
  }
  // Returning the count( state ), IncreaseCounter( function ) both as a object which our main component wants 
  return {

      count: count,
      IncreaseCounter : IncreaseCounter
   
    }
}

function App(){

  // now we are directly using both  . by destructuring( => means hook returned an object and e are pulling out sepecific keys we want into variables ) them 
  const[count,IncreaseCounter] = useCounter();          // Calling useCounter() cutom hook and creating variables  " count, IncreaseCounter " from that object 

  /* without destructuring we need to write this below
   - const Counter = useCounter()
   - const count = Counter.count
   - const IncreaseCounter = Counter.IncreaseCounter */

   // Render a button that displays the current count and triggers 'increaseCount' on click
  return(
    <div>

      <button onClick={IncreaseCounter}>Increase: {count}</button>

    </div>
  )

}

export default App


// Notes:
// Custom hook bhi ek function hai jiska name "use" se shuru hoga aur woh khdh apne andar ek hook ko use krega...
// Jaise hm programming mai sum() ka program likhtey hai jisse us progrm ko bar bar use kr paye so that same thing the custom hook does..