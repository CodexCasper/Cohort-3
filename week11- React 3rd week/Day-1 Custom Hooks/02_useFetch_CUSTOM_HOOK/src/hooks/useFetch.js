import {useState, useEffect} from 'react'


export function usePostTitle(){

    // Initializing an empty post array and setting its updating function 'setpost' 
    const[post,setpost] = useState({});

    // Created an getposts function to fetch data from backend 
    async function getposts(){

    // fetching data fromm backend
    const response = await fetch( "jsonplaceholder.typicode.com/posts/1" );

    // then converting it into json 
    const json = await response.json();

    // and updating our array and passing json in it 
    setpost(json);
  }

  // useEffect runs when the component mounts
  // using the useEffect hook bcoz it only gets mounts once bcoz there is empty dependency array 
  useEffect( () => {                                    // the Reason we didn't defined our function here bcoz we can't use async function here is useEffect hook useEffect( async () => ..)

    getposts();                               // rendering our function that will fetch some data from backend 

  }, [])

  // Returns the title of the fetched post
  return post.title;
   
}

// this useFetch hook here takes an 'argument' means whatever url( can be any ) we put over here as an input 1.It sends a backend request to that 2.Gets the response 3. Returns the data
// here the input( url ) is generic which means whatever url or input user gives us go to that and follow above process
// The only difference in useFetch and usePostTitle is 'useFetch' is generic whatever comes it uses that but 'usePostTitle' only send request to specific url we had given as input 
export function useFetch(url){

    // State to store the data fetched from the API
    const[finaldata, setfinaldata] = useState({});

    // Function to fetch data from the provided URL
    async function getDetails(){
        
        const response = await fetch(url); // Make an API call to the provided URL

        const json = response.json();  // Parse the response into JSON format
        
        setfinaldata(json);  // Store the parsed data in the state
    }

    // useEffect ensures the fetch function runs when the component using this hook mounts
    useEffect( () => {

        getDetails(); // Trigger the API call

    }, []); // Empty dependency array ensures the effect runs only once on mount

    return{

         // Return the fetched data for use in the calling component
        finaldata

    }
}

/*Reason why we used custom hook bcoz we can not define hooks(useState etc) in a function we need to use a hook to use another hook or declare inside component  */