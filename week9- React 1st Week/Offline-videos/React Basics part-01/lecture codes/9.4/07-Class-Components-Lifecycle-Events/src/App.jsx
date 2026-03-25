import {useState,useEffect} from 'react';

// here we are defining a React compponent(a function) and named it "App" and and this "App" is inserted into the <div id="root"></div> in index.html 
// means index.html is  having its source from " main.jsx" where "main.jsx" is importing "App.jsx" and creating a root element and creating a App
function App(){
  return (
    // return a JSX that will  be rendered in the browser 
    <div>
      {/* rendering mycomponent inside app component */}
      <myComponent  />
    </div>
  );
}

//creating a fn. which we will render inside our main or root component 
function myComponent(){
  const[count,setcount] = useState(0);

  //useEffect runs when the count state changes(bcoz of dependency array) or when the component mounts (means out the component in the scrren when it appears for the first time )
  useEffect ( () => {
    console.log("component mounted or count updated")


{/*this simulates 'componentDidupdate ' as same as in class components  */}


  }, [[count]])

{/* this simulates componentDidmount which is as same as class component  */}
{/* this useEffect hook will only runs once when component mounts and cleanup wehn component unmounts  */}
  useEffect ( () => {
    console.log("Component  will  mounted")

{/*cleanup simulates componentwillmount */}

    return () => {
      console.log("Component will unmount")
    };
  }, [])
  
  return (
  <div>
    <p>count: {count}</p>
    <button onClick={ () => setcount(count+1)}>Increment</button>
  </div>
  );
}

export default App;

{/* NOTES:
  -LIFECYCLE EVENTS => when a component is used then it appears through three phases
  (a)it appears
  (b)it updates
  (c)it disappears
   theese moments are being callled lifecycle events  */}