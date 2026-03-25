{/* here we wrote the code for updating linkedin notifications */}

import {useState} from 'react';

function App(){
    const[count,setcount] = useState(0);

    function increasecount(){
        setcount(count+1);
    }

    return (
        <div style={{backgroundColor: "#dfe6e9",minHeight:"100vh", padding:"20" }}>
            {/*display the count state in a div */}
            <div style={{
                background: "red",
                    borderRadius: 30,
                    width: 30,
                    height: 30,
                    paddingLeft: 10,
                    paddingTop: 5,
                    position: "relative",
                    left: 12,
            }}
            >
                {count}
            </div>
            {/* Add an image */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
                style={{
                    width: 30,
                    height: 30,
                }}
            />

            {/* Add a button that will call the increaseCount function when clicked */}
            <button
                onClick={increaseCount}
                style={{
                    marginLeft: 10,
                    padding: 10,
                    borderRadius: 5,
                    cursor: "pointer",
                }}
            >
                Increase the Count
            </button>
        </div>
    );
}

export default App;