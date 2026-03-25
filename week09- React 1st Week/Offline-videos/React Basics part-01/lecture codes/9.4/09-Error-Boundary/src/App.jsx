{/* Error boundary are React components only ,which catches Js errors in child component and handles the fallback UI
  which means suppose if there is an error in any effect or component then whole website must not crash , this is handled by 
  error boundary and we need to show  a fallback UI */}

// importing the ErrorBoundary component 
import ErrorBoundary from './ErrorBoundary';

//defining our main component(function) and named it App where we will render our children components 
function App(){

  //return a JSX that will be appear in UI 
  return (
    <div>

 {/* Wrap Card1 in ErrorBoundary to catch any potential rendering errors. */}
      <ErrorBoundary>
        <Card1>  {/* Rendering the Card1 Component */}
          hi there
        </Card1>
      </ErrorBoundary>

 {/* Wrap Card1 in ErrorBoundary to catch any potential rendering errors. */}
      <ErrorBoundary>
        <Card2>              {/* rendering the Card 2 component */}
          hi there
        </Card2>
      </ErrorBoundary>

      <Card3 />

    </div>
  );
}


function Card1(){

  // Throw an error to simulate a rendering error in the component.
  throw new Error("Error while Rendering card 1");

  return (
    <div style={{ background: "red", borderRadius: 10, padding: 20, marginTop: 20 }}>
      <h2>Card 1</h2>
    </div>
  );
}

function Card2(){

  return (
    <div style={{ background: "red", borderRadius: 10, padding: 20, marginTop: 20 }}>
      <h2>Card 2</h2>
    </div>
  );
}


function Card3(){

  return (
    <div style={{ background: "red", borderRadius: 10, padding: 20, marginTop: 20 }}>
      <h2>Card 3</h2>
    </div>
  );
}

export default App