import './App.css'
import { useState, createContext, useContext } from 'react'

// Using Context API, we have defined our global context and usually it is defined in seperate file but for now we are using it here  
// Reason we have defined it globally means now onwards we will set the context for all state variables( works like a container ) here and use it globally 
// """""" Step 1. Define a context """"""""""
const BulbContext = createContext();

export function BulbProvider({ children }){       // "chlidren" here is 'Light' component which we are rendering in App

  // insteading of defining our variables in our main component we defined here just for better arrangment of our code 
  const [bulbOn,setBulbOn] = useState(true);

    {/* now ths qn is how do we do it , ANS => Using "PROVIDER" and wraping our component inside it so that whoever are its descendents(means children) can access the state variables(content) which are contained in the context container  */}
  return <BulbContext.Provider value={{

        passingContentOfFirstVariable : bulbOn,
        passingContentOfSecondVariable : setBulbOn

      }}>
        { children }       {/* rendering our children( light ) component  */}
  </BulbContext.Provider>
}

function App(){

  //To solve prop drilling problem we must use context which we will define globally so that state variable can be used by every component whether its deep or not 
 
  
  // """""" Step 2. providing value that we want children( LightBulb, LightSwitch ) to have """"""""""
  return(
    <div>
    
      <BulbProvider>
        <Light />
      </BulbProvider>

    </div>
  );
}

function Light(){

  return(
    <div>
        {/* descendents for Light */}
      <LightBulb />
      <LightSwitch />

    </div>
  )
}

function LightBulb(){

  // """""" Step 3. consume the context using useContext """"""""""
  const  { passingContentOfFirstVariable } = useContext(BulbContext);

  return(
    <div>

      {passingContentOfFirstVariable ? "Bulb On" : "Bulb Off"}

    </div>
  );
}

function LightSwitch(){

  // """""" Step 3.2. consume the context using useContext """"""""""
  const { passingContentOfFirstVariable,passingContentOfSecondVariable } = useContext(BulbContext);                                 {/*why we have used object bcoz we know that we can destructure it ( {bulbOn,setBulbOn} ) and tell what we want to use */}

  function functionToToggle(){
    passingContentOfSecondVariable( !passingContentOfFirstVariable );         //just toggling the button from true to false annd then from false to true 
  }

  return(
    <div> 

     <button onClick={functionToToggle}>toggle the button</button>

    </div>
  );
}

export default App;

{/* NOTES:
  - Rolling up state => means suppose there is one main component having one child component and that child component is having three
    children then if we define some state variable in one of the children and other two wants to access it then we can define that state variable in their parents's component which
    will be passed passingprops
    
    -prop drilling => means if we definne a state variable in main component and pass that viia props in sub children where the child of main 
    component who is the parent of other three sub children is not using it */}