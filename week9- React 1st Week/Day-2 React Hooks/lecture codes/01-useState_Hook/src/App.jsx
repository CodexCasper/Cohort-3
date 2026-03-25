import { useState } from 'react';

//created a functional component call app
function App(){
  return (
    <div>
      <Counter> </Counter>           {/* re-rendered the counter button */}
    </div>
  );
}

//orignal component that is returning our button 
function Counter(){         //if lightcolour that means not used in app till now

  //we can perfrom raw DOM manipulation here to inc. count but we need better way 
  const [ count, setcount ] = useState(0);      //useState is a hook that let us add 'State variable' in our components , we usually declare it on top level of our component to declare a state variable 

//function to increase the count of the button and this are the functions that our main component needs and we should declare this fn inside our main component 
function IncreaseCount(){
  //increment the state variabke by 1
  setcount( count + 1 );
}

//function to decrease the count by 1
function DecreaseCount(){
  //decrement the state variable by 1
  setcount( count - 1 );
}

//function to reset the counter
function ResetCount(){
  setcount(0);
}

  return <div>
    {/* Display the count state variable */}
    <h1 id="text"> {count} </h1>

  {/*button for inc. counter */}
    <button onClick = {IncreaseCount}>Increase count</button>
  {/*button for de. counter */}
    <button onClick = {DecreaseCount}>Decrease Count</button>
  {/*button to reset the count to 0 */}
    <button onClick={ResetCount}>Reset Count</button>

  </div>
}
export default App

//whenever the button gets clicked the fn. gets called onClickHandler and react re renders it and setcount of original 'count '

{/* 
  function counter(){
  
  let count = 0;
  function onClickHandler(){
  }

  return <div>
  <h1 id="text">{count}      //{count} here is a dynamic variable 
  <button onclick = {onClickHandler}> increase count </button>
  </div> 

  }

  NOTES:
  1.the problem here is we can not use dynamic variables when we declare our raw variables like let count=0;
  2.bcoz react can re render the state variable which we created in like let[count,setcount] = useState(0); and that is why we need our useState hook
*/}
