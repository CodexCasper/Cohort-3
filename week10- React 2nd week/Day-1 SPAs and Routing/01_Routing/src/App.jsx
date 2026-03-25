{/* install npm install react-route-dom to use existing library for routing in SPA */}
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css'

// Defining our main App component that will be rendered by 'root' in index.hmtl , where the source is main.jsx which is creating a root for every component we are creating and put in the div in index.html 
function App(){

  return (
    <div> {/* below is the naive way to navigate  */}
    {/*  <a href='/'>Allen</a> | <a href='/neet/online-coaching-class-11'>11th</a> | <a href='/neet/online-coaching-class-12'>12th</a>       {/* Navigating thorugh each content, through naive way but it will re-load the whole page for every click on these pages   */}

      <BrowserRouter>  {/* we will use BrowserRouter to wrap everything inside */}

      {/* we must import link from react and then same as anchor tag we must use link to directly naviagate without reloading whole page, NOTE: Link must be declare inside BrowserRouting only  */}
      <Link to="/">Allen</Link> 
      |
      <Link to="/neet/online-coaching-class-11">Class 11th</Link>
      |
      <Link to="/neet/online-coaching-class-12">Class 12th</Link>

         <Routes>                                                                                    {/* and inside BrowserRouter we must define our routes ( routes => means whatever comes after / , i.e. http://localhost:300/"ROUTES" ) */}
           <Route path="/neet/online-coaching-class-11" element={ <Class11Program />}></Route>       {/*this basically means we are defining that whenever this routes are accessed => head over to this "Class11Program " component  */}
           <Route path="/neet/online-coaching-class-12" element = { <Class12Program /> } ></Route>   {/*another route which will head to another component */}
           <Route path="/" element={ <Landing /> }></Route> 
           <Route path="*" element={ <NoPage /> }></Route>                                            {/*catching all the unnecessary routes and returning a message  */}
         </Routes>

      </BrowserRouter>

    </div>
  );
}

function NoPage(){
  return <div>
    Sorry page not found !
  </div>
}
// A functional component created for class 11th route 
function Class11Program(){

  const Navigate = useNavigate(); {/* useNavigate is a hook (everything starts with use and react) and we are calling useNavigate hook to a function and storing in a variable */}


  //Created a function which gets called when the button gets clicked and use the Navigate variable 
  function redirectUser(){
    Navigate("/")
    {/*Navigating on Landing page  */}
  }

  return <div>
    NEET programs for class 11th
    
    <button onClick={redirectUser}>Go back to Landing page</button>  {/*simply we have defined a button so whenever it gets clicked it redirects to 'redirectUser' function and call the UseNavigate hook  */}
  </div>
  {/*we can also use Link before button to redirect or directly navigate  */}
}

// A fucntional component created for class 12th route 
function Class12Program(){
  return <div>
    JEE programs for class 12th
  </div>
}

// A fucntional component created for landing page 
function Landing(){
  return <div>
    Welcome to Landing Component !
  </div>
}

{/*NOTES:
  1.i.e. if we visit allen website and click over a exams functionality in the app then the app loads the content inside it and routes changes to that but the whole app doesnot fully loads 
  now what w need to do is somehow fetch the route and mainting a state variable 
  
  */}

export default App  