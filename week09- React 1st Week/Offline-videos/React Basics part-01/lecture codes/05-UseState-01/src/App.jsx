import {useState } from "react";

function App(){
  return (
    // Apply inline styles to the div element
    <div style={{background: "#dfe6e9", height:"100vh", width:"100vw", color:"black"}}>
      <ToggleMessage />
    </div>
  )
}

// Create a function component named ToggleMessage that will be rendered in the App component
const ToggleMessage = () => {

  {/*react knows whether the mmessage is visible or not by a yes/no value , false => message hidden true => message shown */}
  const [notification, notificationCount] = useState(0);

   // Create a function named toggle that will be called when the button is clicked
    function toggle() {
        // Update the notification state by incrementing it by 1 using the notificationCount function
        notificationCount(notification + 1);
    }

  return(
    <div>

       {/* Create a button element with an onClick event listener that calls the toggle function */}
            <button onClick={toggle} style={{ padding: 10, margin: 10, cursor: "pointer" }}>
                Increase Count
            </button>

        {/* Display the notification state in the div element */}
        {notification}

    </div>
  );
};

export default App;

{/* go to app1.jsx for useState part 2 */}