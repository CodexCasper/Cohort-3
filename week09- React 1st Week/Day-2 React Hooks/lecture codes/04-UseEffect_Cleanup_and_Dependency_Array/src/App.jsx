import {useState,useEffect} from "react";

//creating a functional component which is also a parent or root component 
function App(){
    
    //creating a state variable using 'useState 'and storing its current value in 'count1' and updating thorugh 'setcount1'
    const [count1,setcount1] = useState(0);

    //creating a another state variale using 'useState' and storing its current value in "count2" and updating with 'setcount2'
    const [count2,setcount2] = useState(0);

    //function which will get called when we will click button to increase the count of 'count1'
    function increaseCounter(){
        setcount1(count1 + 1);
    }

    //function which will dec the count by 1 of 'count2'
    function decreaseCounter(){
        setcount2(count2 - 1)
    }

    //Render the JSX layout of the component 
    return (
    <div>
        {/* Render the Counter component and pass 'count1' , 'count2' as props */}
        <Counter count1={count1} count2={count2} / >
   
        {/*created a button to trigger function that increase in count1 by 1 */}
        <button onClick={increaseCounter}>increase count1</button>

        {/*created a button to trigger function that decrease in count2 by 1 */}
        <button onClick={decreaseCounter}>decrease count2</button>
    </div>
    );
}

{/*"myobj" is a object which can be named anything */}
{/*here we defined a another functional component called Counter which will display the count values passed as props */}
function Counter(myobj){

    //log the message so that we know that Counter component is rendered 
    console.log("Counter component is rendered");

    //using the useEffect hook to handle the side effects when the component is mounted or unmonted
    useEffect( () => {
        console.log("component is mounted");

        //Return a cleanup function that logs when the component is unmounted 
        return function(){
            console.log("component is unmounted");
        }
    }, []);

    ///useEffect hook to handle the side effects when the props.count1 changes 
    useEffect( () =>{
        console.log("count1 has changed");

        //return a cleanup function to clean the previous count1 values 
        return function(){
            console.log("cleanup inside the second useEffect");
        }
    }, [props.count1]); //dependency array will run this effect only when the 'props.count1' changes 

    return (
        <div>
            {/*display the value of count1 passed from the parent node */}
            <h2>Counter1 : {props.count1}</h2>

            {/*display the vlaue of the count2 passed from the parent node */}
            <h2>Counter2 : {props.count2}</h2>
        </div>
    )
}

{/* export the App component so tht it can be exported  */}
export default App;