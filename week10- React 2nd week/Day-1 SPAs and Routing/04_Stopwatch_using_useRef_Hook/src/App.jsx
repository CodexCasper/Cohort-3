import { useState, useRef } from 'react';

function App(){

  const[currentCount, setcurrentCount] = useState(1);
  // let count = 0;        // this approach is absoutely wrong bcoz when react re-renders the code then it will re-initialize the count to 0, and that is the reason we use 'useState' hook bcoz it guard our value no matter how manytimes react re-renders

  // Use a reference to hold the timer ( so that it can start and stop )
  const timer = useRef();

  // const[timer, setTimer] = useState(0);
  function startClock(){
     let value = setInterval( () => {
      setcurrentCount( count => count + 1);
    }, 1000);

    //save the timer ID in the timer refference 
    timer.current = value;

    // setTimer(value);     //this will create a extra re-render and we are just storing its value somewhere not showing on our page
  }

  function stopClock(){
    console.log(timer);
    
    //stop the timer using clearinterval 
    clearInterval(timer.current);
  }
  return(
    <div>
      {/*showing our currentvalue */}
      <h2>{currentCount} </h2>

      <br />
      {/* buttons to start and stop the clock */}
      <button onClick={startClock}>Start Timer</button>
      <button onClick={stopClock}>Stop Clock</button>
    </div>
  )
}

export default App