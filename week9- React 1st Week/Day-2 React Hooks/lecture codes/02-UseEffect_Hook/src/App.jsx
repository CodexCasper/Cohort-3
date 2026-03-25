import { useState , useEffect } from 'react';

//create a functional component called App to serve as the root component 
function App() {
return <div>
  <h3>React useEffect-hoooks</h3>
  <Counter></Counter>           {/* render the Counter component inside the app component  */}
</div>
}

//create a functional component called counter to handle counting functionality 
function Counter(){

  const[ count, setcount ] = useState(0);
 
   //the problem with this setInterval is everytime it gets changed to react renders it( means react have called the function bcoz fn. have changed and now react must show it or render it )
  //hooking into the lifecycle events of react , lifecycle means that only renders(draw or display smthng again ) when first time it gets called happens due to chnages in data
  useEffect( function() {           //useEffect hook only let the inner code run once when we passes thorugh it and then due to setInterval it itself gets updated innstead  of just re-rendering whole Counter function
    setInterval( function() {

      //setcount( count => count + 1 );
      setcount( function(count) {
        return count + 1;
      });
    }, 1000);

    // Log a message when the component mounts
    console.log("mounted");
  }, []);                                 // [] is a dependency array which means we can not directly use any variable in our setInterval ,in place of function in setInterval we can not directly put count+1 
 // Pass an empty dependency array to run this effect only once, when the component mounts

// Return the JSX to render the current value of 'count' in an <h1> tag
  return <div>
    <h1 id="text">{ count }</h1>
  </div>
}


export default App;