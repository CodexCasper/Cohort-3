// importing useState hook so that we can store dynamic of anything that we want to store 
import {useState} from "react";

//this is the root component 
const App = () => {
  /*
  // make a simple Js object of array 
  const todos  = [{
    title:"go to gym",
    done: false 
  }, {
    title:"have you studied today",
    done: true
  }];

  */

  // we used map here bcoz we want to loop over array so that we can render it which returns a JSX elemnt and
  // later rendering todoscomponents become a array of react components 
  // const todoscomponents = todos.map(todo => <Todo title ={todo.title} done = {todo.done} />)

  return (
    <div>
      {/* {todoscomponents}  {/*we are returning or to display everything inside todoscomponents}/*  */} 
      {[ // whenever we render list of array then we must give a key to  it so that react can uniquely indentify whenever it changes  means every child in a list must have a unique 'key' prop
        <><Todo key={1} title={"go to gym"} done={false}></Todo>
        <Todo key={2} title={"finish early"} done={true}></Todo></>
      ]}

    </div>
  );
};

//this is the children component that recieves data from its parent 
function Todo({ title, done }){
  return <div>
    {title} - {done ? "done!" : "please do it!"}
  </div>
}

export default App;

