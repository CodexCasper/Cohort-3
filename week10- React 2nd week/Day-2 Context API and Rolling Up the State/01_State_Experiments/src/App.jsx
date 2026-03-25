import './App.css' 
import { useState } from 'react'

// Creating a main( parent ) component where we will render other components , NOTE: we can also write whole code for 'LightBulb' component 
function App(){
  
  return (
    <div>

      {/* rendering the LightBulb component */}
      < LightBulb />

    </div>
  );
}

// created a component to manage bulb's state and action 
// 1 st child of App(parent) component, think of this as a tree structure of components  where App is starting node from the top andone of its child is LightBulb component 
function LightBulb(){

  // Defining a state variable initialized to 'true' and using useState hook to store our dynamic variable 
  const [bulbOn, setbulbOn] = useState(true);

  return (
    <div>

      <BulbState passingPropsForBulbOn={bulbOn} />                     {/*pasing our state variable as props, where only bulbOn variable is passed   */} 
      <ToggleBulbState passingPropsForBulbOn={bulbOn} passingPropsForSetbulbOn = {setbulbOn} />      {/* Here we passed both state variable as props bcoz we are using simple way to toggle button to off and there we need  bulbOn variable */}

    </div>
  );
}

// Component to display current State of the bulb 
// 1 st subchild of LightBulb component
function BulbState({ passingPropsForBulbOn }){

 // if we will define our state variable "bulbOn" here then we will not be able to access bulbOn variable at another children commponent 'ToggleBulbState'
  return (
    <div>

      {/*we are using conditional rendering( using ternary operator ) to diaplay whether true or false conditions */}
      { passingPropsForBulbOn ? "Bulb is on" : "Bulb is Off"}                     {/*ternary operator => if bulbOn is 'true' then display "Bulb is on" and if false "Bulb is Off" */}

    </div>
  );
}

// Component to toggle the state of the bulb 
// 2 nd subchild for LightBulb component 
function ToggleBulbState({ bulbOn, passingPropsForSetbulbOn }){         // passed two props from parent 

  function functionToToggleSwitch(){
    setbulbOn(!bulbOn)              //3rd way , flip the value if true then false , if false then true of bulbOn variable

 // 1st way. setbulbOn ( turnPrevValue => !turnPrevValue )       //  {/*basically we are defining  a function here with a argument called 'turnPrevValue' and catching the previous value (true) and turning it to (false )*/}

  {/*2nd way.  setbulbOn( function ( turnPrevValue ){
      if( turnPrevValue == true){
        return false
      }
      else true;
    }
      */ }
  }

  return (
    <div>

      <Button onClick={functionToToggleSwitch}>Toogle The Button</Button>

    </div>
  );
}

//exporting the default app to import in other files 
export default App;

{/* NOTES:
    - we know that 'props' are passed from parent to children , here 'BulbState' is a child of 'LightBulb' and it is possible to pass props from child to parent but not advisable 
    so , now instead of declaring our state variable in 'BulbState' component , declare in "LightBulb" parent component which is our "LAC" means least common Ancestor  
    
    - here this called " ROLLING UP THE STATE " which means defining all our state variable in parent component so that it can be accessed to to other component also */}