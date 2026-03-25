import { useState } from "react";

function App(){
    //defining the 'state' todos and its setter 'setTodos', initializing one todo item
    const [ todos, setTodos ] = useState([
        { // default to do item 
        title: "go to gym",    //  Title of the todo item 
        description: "hit the gym daily !",   // description of the todo item
        done: true,
    },
]);

//function to add a new to do item
function addTodo(){
   setTodos([
    ...todos, // spreads the  existing todo array 
    {
    title:document.getElementById("title").value,               //get the title input from the dom
    description:document.getElementById("description").value,           //get the description input fromm the dom
    done: true,
    }
  ]);
}

//function component to display each todo item 
function Todo(props){
    return(
    <div>

        <h1>{props.title}</h1>    {/* display the title of the todo */}
        <p>{props.description}</p>   {/* display the description of the todo */}

    </div>
    );
}

//Return the JSX to render the component 
return (
    <div>
        <h1>todo app</h1>

        {/*input field for the todo title */}
        <input id="title" type="text" placeholder="title"></input>

        {/*input field for the todo description */}
        <input id="description" type="text" placeholder="description"></input>

        <br />

        <button onClick={addTodo}>Add todo</button>

        <br />

        {/* map through the todos array and render each todo item using the Todo item */}
        {
        todos.map((todo) => (
            <Todo
                title={todo.title}
                description={todo.description}
            />
        ))}
    </div>
    );
}

export default App