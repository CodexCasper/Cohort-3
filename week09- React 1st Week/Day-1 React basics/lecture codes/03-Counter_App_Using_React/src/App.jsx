import { useState } from "react";

 function App(){

    //Here we defined a 'state' variable and initliazed it's value using 'useState' to '0'
    const[ count, setcount ] = useState(0);

    //defined a fn which get called and it updates our button with the count 
    function onClickHandler(){
        setcount(count + 1);                //setcount is used to re-render( is a process where component updates its output to reflect tha changs in data(state,props) ) count in button component 
    }

    return (
        // this is our button component means 
    <div> 
    {/*//First of all below given code is not HTML but JSX which works like HTML */}
    {/* //in react we declare onclick fn like below but not like onclick="onbuttonpress"*/}
        <button onclick={ onClickHandler }>

    {/*<Button onClickHandler = {onClickHandler}></Button>*/}
          {/*  //here we use our dynamic variable called {count} */}
            Counter {count}         
        </button>
    </div>
    );
}

/* // props means we are defining our html tags on our knows or writing our own code 
function Button(props){
    return <button onClick={props.onClickHandler}>Couter {count}</button>
}
*/

// Exporting the App component as the default export for use in other parts of the application.
export default App;     