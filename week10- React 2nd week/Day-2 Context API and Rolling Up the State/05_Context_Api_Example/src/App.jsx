import { useState, createContext, useContext } from "react";

const ContextProvider = createContext();

function CountContextProvider( {children} ){

  const[count, setcount] = useState(0);

  return <ContextProvider.Provider value={ {count, setcount} }>
    <children />
  </ContextProvider.Provider>
}

function Parent(){
  return (
    <CountContextProvider>

      <Increase />
      <Decrease />
      <Value />

    </CountContextProvider>
  );
}

function Increase(){

  const[setcount] = useContext(ContextProvider);

  <button onClick={ () => setcount( count => count + 1 )}></button>
}

function Decrease(){

  const[setcount] = useContext(ContextProvider);

  <button onClick={ () => setcount( count => count - 1 )}></button>
}

function Value(){
  const{ count } = useContext(ContextProvider);
  return <p>Count: {count}</p>
}

const App = () => {
  return (
    <div>

      <Parent />

    </div>
  )
}

export default App;

{/*NOTES:
  - now we know that the increase and decrease function are not rendering count state variable but when we click on increase or 
  decrease button , three of them increase, decrease, count variable are rendering and this is not optimal and to optimize this
  we must use a library for state management called "Recoil"  */}