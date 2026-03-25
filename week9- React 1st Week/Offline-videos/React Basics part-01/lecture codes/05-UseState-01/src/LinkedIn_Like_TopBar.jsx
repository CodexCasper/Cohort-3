import {useState} from 'react';

function App(){
    const[currentTab,setcurrentTab] = useState(1);
    const[tabData,setTabData] = useState({});
    const[loading,setLoading] =  useState(true); 

    useEffect( () => {
        setLoading(true);
        console.log("send request to bacckend to get back data for tab" + currentTab)
        fetch("https://jsonplaceholder.typicode.com/todos/" +  currentTab)
        .then( async res => {    // fetch the data stored in json in json format and updated in setcurrentTab 
            const json = await res.json();
            setTabData(json);
        setLoading(false);
    });
    }, [currentTab]);

    return <div>
        {/* if currentTab is feed then the color will be red otherwise black */}
        <button onClick={ () => setcurrentTab(1) } style={{ color: currentTab == "feed" ? "red" : "black" }}> Todo#1</button>
        <button onClick ={ () => setcurrentTab(2) } style={{ color: currentTab == "notifications" ? "red" : "black" }}> Todo#2</button>
        <button onClick={ () => setcurrentTab(3) } style={{ color: currentTab == "messages" ? "red" : "black" }}>Todo#3</button>
        <button onClick={ () => setcurrentTab(4) } style={{ color: currentTab == "jobs" ? "red" : "black" }}>Todo#4</button>  
        <br />
        {loading ? "Loading..." : tabData.title} 
        {/*if loading is true then print loading... otherwise tabData.title */} 
    </div>
}