import {useState} from 'react';

function App(){
  const[showTimer, setshowTimer] = useState(true);

  //this is just a conntainer div in which we are using inline CSS for flexbox(on after other) layout
  return <div style={{ display:"flex" }}>   {/* The style={{ display:"flex" }} means: The <div> will display its children next to each other horizontally */}
    {/*returning  a Card component which container some content */}
    <Card>
      <div>
         hi there
      </div>
    </Card>

{/*returning a Card component  */}
    <Card>
      <div 
          style={{ color:"red" }}> 
          what do you want to post 
          <br />
          <br />
          <input type="text" />
      </div> 
    </Card>
  </div>
}

// this is our component means the outer structure we are defining and the inside part is dynamic means state 
// this card component will only render the children element passed as props 

function Card({ children }){    //we are taking input of prop 
  return <div style={{ background:"black", borderRadius: 10, color:"white", padding: 10, margin: 10 }}> {/* passing innercontent over here as props  */}

    { children }               {/*passing innercontent over here to render it  */}

  </div> // {/*in properties 'R ' should be captial or "border-radius " */}
}