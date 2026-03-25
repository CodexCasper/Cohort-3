import './App.css'
import { useState } from 'react'

function App(){
    
    const[bulbOn,setBulbOn] = useState(true);

    return(
        <div>                  

            <Light passingFirstPropsForLight = {bulbOn} passingSecondPropsForLight = {setBulbOn} />

        </div>
    );
}

function Light({ passingFirstPropsForLight, passingSecondPropsForLight }){

    return(
        <div>                               
            <LightBulb passingFirstPropsForLight={bulbOn} />
            <LightSwitch passingFirstPropsForLight={bulbOn} passingSecondPropsForLight={setBulbOn} />

        </div>
    );
}

function LightBulb({ passingFirstPropsForLight }){
    return(
        <div>
            { passingFirstPropsForLight ? "Bulb on" : "Bulb off" }
        </div>
    );
}

function LightSwitch({ passingFirstPropsForLight, passingSecondPropsForLight}){

    function functionForToggleBulb(){
        setBulbOn( !bulbOn );
    }

    return (
        <div>
            <button onClick={functionForToggleBulb} >Toggle the button</button>
        </div>
    );
}

export default App;


{/*NOTES:
    - 1. here the thing is that we are rednering App child commponent(Light) in main component and passing props so that children of Light can access this props
    - 2. but here it we are passingprops in Light component just bcoz our children can access them and to do that we are passing props in Light component through which Light(component) will transfer props to its  children and this s ourr problem 
    - 3. for more reasons refer NOTES.txt 
    - 4. got to context api for the solution of this problem 
 */}