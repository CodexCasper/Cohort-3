import { useState, useEffect } from "react";

//conditional rendering 
// Create a functional component called App to serve as the root component
function App(){
// Create a state variable called 'counterVisible' and a setter function 'setCounterVisible' to update its value
    const [CounterVisible, setCounterVisible] = useState(true);

    // Use the useEffect hook to run side effects in function components
    useEffect( () => {

        // Initialize a setInterval to toggle the 'counterVisible' state variable every 5 seconds (5000 ms)
        setInterval( () => {
 // Use the functional form of setCounterVisible to ensure we are working with the latest value of 'counterVisible'
            setCounterVisible( c => !c )
        }, 5000);

    }, []); // Pass an empty dependency array to run this effect only once, when the component mounts

    return  <div>
        {CounterVisible && <Counter></Counter>} {/* means if counter is true then call Counter variable and this is ccalled ternanry operator  */}
    </div>
}

// Create a functional component called Counter to handle counting functionality
function Counter(){

     // Create a state variable called 'count' and a setter function 'setCount' to update its value
    const [count,setcount] = useState(0);

     // Use the useEffect hook to run side effects in function components
    useEffect( () => {

        // Initialize a setInterval to increment the 'count' state variable every second (1000 ms)
        let clock = setInterval(() => {                 //this code is running when it mounts

            console.log("from inside setInterval")
            
            // Use the functional form of setCount to ensure we are working with the latest value of 'count'
            setcount(count => count + 1 )
        }, 1000);

        //return a cleanup function to clear the interval wheen the component unmounts
        return function(){
            console.log("running for unmount");

            //clear the interval - unmounting the component 
            clearInterval(clock);
        }

    }, []);            //[] is dependency array 

   
    return (
        <div>
            {/* display the current count value */}
            <h1>{count}</h1>
            <button onClick={increasecount}>Increase count</button>
        </div>
    );
}

/// export the App component as default export so that it can be imported elsewhere
export default App;

{/*NOTES:
    -MOUNTING => means component is created and shown to the screen for the first time
    -RE-RENDERING => means react runs the component again bcoz smthng has changed
    -UNMOUNTING => means react removes the component from the screen completely  */}