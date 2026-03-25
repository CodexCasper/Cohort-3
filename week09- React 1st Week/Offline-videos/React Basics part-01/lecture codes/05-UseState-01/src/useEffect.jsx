//import useState & useEffect hook from react 
import {useState, useEffect } from 'react';

// Our main parent component  
function App(){
    //Initialize a state variable with 0 and its setter 
    const[count,setcount] = useState(0);

    //useEffect is used for sideEffects which means 1.runs after render 2.should not run during render phase 
    //wraping setInterval inside useEffect bcoz useEffect will run only once and inside code gets updated when it mounts once 
    useEffect( () => {

       const interval =  setInterval( () => {
            setcount( prev => prev + 1 )   // kya hoga ki useEffect me kab setintervl call hoga to uske andar la fn call hoga jo ki prev value ko updated rakhega na ki hard code kr dega jo value 1 initialize hui thi useState me 
        }, 1000)     /// prev => prev + 1 is equal to the function itself we can also name it increasecounter and declarea a seperate fn to inc. count using setcount by 1

        //returning a cleanup function that react calls to clean the previous and stop the clock when component unmounts 
    return () => clearInterval(interval);
    }, []) // [] empty dependency array means react will run this effect only once intially after mounts if we removed it then react runs this every tie it renders 

    useEffect ( () => {
        console.log("running vevery time when count updates but rendered only once bcoz of useEffect" + count );
    }, [count])// dependency array is used bcoz we need to update the backend that whhen the count changes 

    return (
        <div>
            <div>
                <h3>stopwatch in react using useEffect</h3>
            </div>

            <div>
                <h1>{count}</h1>
            </div>
        </div>
    );
}

//exporting the App component to use it in another files 
export default App;