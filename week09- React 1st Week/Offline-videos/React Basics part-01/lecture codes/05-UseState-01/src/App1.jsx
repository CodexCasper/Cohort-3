{/* contains all the code for UseState for part 2 */}

//importing the useState hook 
import {useState} from 'react';

//importing the PostComponent from the post.jsx
import { PostComponent } from "./post.jsx";

// Main app component declaration
function App(){
    //Initializing the 'posts' state as an empty array and its setter 'setposts' to update it , initialize a empty array using useState and storing the value in posts
    const [posts, setposts] = useState([]);

    //Mapping over 'posts' array to render each post as a PostComponent means it loops over posts  array and for each component returns <PostComponent> and passes properties as props 
    const postcomponents = posts.map(post =>
        <PostComponent
          //Passing 'name' prop to PostComponent
          name={post.name}
          //Passing the 'subtitle' prop to PostComponent
          subtitle={post.subtitle}
          //passing the 'time ' prop to PostComponent
          time={post.time}
          //passing the 'image' prop to PostComponent
          image={post.image}
          //passing the 'descroption' prop to PostComponent
          description={post.description}
       />
    )

//function to add the new post to the 'posts' state
    function Addpost(){
        //using 'SPREAD' operator to add new posts to our array and also retaining existing posts 
        setposts([...posts, {
            //Name of the user for the new post
            name:"Parth Bindal",
            //sbtitle for the new post
            subtitle:"10000000 followers",
            //time for the new post
            time:"100m",
            //image url for the new post
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEUKZsL///8AW7/v9Pp6mtUATLzCyujE1e0AXr/6+/0AYsFMhs0AZMEAYMAAXcAAWL42iM9lmNUAVb7h6/YAT7yWvOStx+ckd8mLr910l9RUlNMse8q/z+oASLsAUb3Z5vXu8fgkb8ZIdcfT2+1hic+3xeYpW8EsZMQsVsBJcsdcjtKSrdxRfMupvuOFm9c3bsUAO7ietuBCasVaect4qNqJpdlggc6Hn9d2k9NGf8uTptrJz+qmwuQANrhVi882c8ZqB1NRAAAGkElEQVR4nO2da3eiOBiAIeiYsAFWouIFC1bt7FQd6+x2rO3s+v//1UJbO221JA7JQHLe55ye0y9InpM39wuW/QJJusORpT+jYTchP7Wswz+sFwXYpVUnTwLUxUHUY+8MSRwhE+wOUDSKyWtD1g9M8suhQZ/9NEzaRoTnW6jbTg6GrE3NE8wUaZs9GZK+gTmYQ90+eTSMjSuDB2gQ54ZsZKpgphixzLCHqk6HQlDPtkhkbhbmmUisJKg6FUoJEquLq06EUnDXGrpVJ0Ip7tAyuCbNoVHVKQAAAAAAAAAA4BTUNXRizsrdPIyuPk+iyV9XvucZ50l968t1/Lzc4UwXyzUya+jsf56tHPsVZPp1HxqUj2g3f+P3SGvgGTPH02wkR355sK7Whsy13myOM/A5G78YoXiz+sAvX5f7ZkCgdjYfC2aKV9pXN2jwUYg+EYdVp7AkeD8tFLTtod6KFBfGaE7qax2n+DvjGdqrZtWpLAF1F1xBm+ncF6drXinMILcaL9B5f/MFs3Zf4zD1/hExTCJ9hxm+QJBmtWlD376bf7LH/R5H44KIivszz5CFvo3+FeH7ZWzAsL5cCUWpzoZiNY3OTb7fEjF0tvq2Ft6tiCHb6TvQ95Yihi2Nt2+6X0QK4uqi6nSWAN/zBZ2RvkGaGc74I+DWuOpUliLkDoHJ3qs6kaVwL3nDi43eWZhl4l1xvybRePj7TFg4CmY7vWM0hwYFRZHd+VWnTwIUNwoE9W3sX0H976fLYrI0QzAD+b1jP7IY6zsDdQQdL2P2ejhM0vmFzp21E3jjySKestRxnJRN5wukfytxhBs26ayx3W4bO6+p8XCiEIoRChAybzMNAAAAAAAAcCaUUtd1veyPmneZBfWyfi9d7y+fmVCEsDmWLgrd3exu2+1Nk4RlJNNef3s32weB2sku3GkWc2J1NCx+4sTMAEXNSWMxn6ZHEwmstbndXShcoMSz+adijheAw/uHogceRu8VaQc3Tti9WCafbsMLVdGKGryF7uMdUc2H4if+fBt1tOmvEs5bSLJxm2ocf8nw0xmGtBnGQvsh0k2gJFYVG7q+dWIW7wOcNlJQ5yg1pHi9ENvPcnjXN/mNh0pDD38V2uvxCqdtyV5GUGgY7FdnZeATc9lHPNQZNmdCGx+P3ydZUZnheMtfPz9Ncil134AiQ9o5r4p5g/NZ5nqJIkPEPeRQBJHZ+CsxxEhgE0sRaUdeLioxDO9+PUSfiOXd1KnE8JvYps4CyEJaD06FIRXa8ViMcy1LUYVhwXlGcVprSX1UFYZlC+ETt5IafhWGcmBLOQ1/fQ3tH3JOlNXYkCyllMQaG9o/pJTEOhsSKUPFOhvaUk4j1drQ+dd0Q1vGMYh6G8YSNmb9LkNC0nytInXO6vCkuhg6Sby5HeyiSXS93cRnzG44/5WvTn+DIdtsd+FFgPIlQxxchLOF8BwjkXBqTrlhej9Db5fPfHT54XUx73koH6aqDX8s/eP6EHs7wVBNyi8TqzV0GuHJCRfqjcUU0+vSBVGpIdt/WIzoze863KnSkE0KkkevRHJRQlWj0DDdF44N8Eykupl36mtI7ooDjHois8Zx6fMQ6gzveSXIXwoUxdaktoatNXfaOhDIxKT0uStlhl/5A3Qs0CqyWdnhhSrD2BKIruac+ztp6aNligzJvUgtz3+5nQ5qajgVO1qLuGGaDspORykynIv1mMfcFQ6n9O0/agxFO1shtzatqyETvFnKv9bWUPD8N3V5kxp1NRS+/+xGV0PhmzRueG+vq6HwmGfM65rW1JBsRcetTV5zUVfDtmhHRFvD/0S7y9oa/gGGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGYAiGxhr6A+YUEx+d+e/MOY84woadmPNLrPQpWbofNIo5PkyNZ5xHGsKH6Lk/NdiXvtyE+qiYE9mBOY+ccb0q76eM+cQkAAAAAAAAAAAAoJpR1QlQCx1ZQ5nf3akf7tDqSv14Uu3AXStR+HnIGhAkFolMnsuhEbHsnuQvtdUK1LMtmxmciXTEMkM7DkxVpEFs54akL+eDLbWDun3yaGiztnmfh7byz1+386szc0M7aRuYi9RtP1729mhos75xZZEG/afLT63nFb14JO9rdDWAoujwlWHrsNTIelGAzQhWFwdR7+X22hfD/MvQ3aEJI43RsJu8ujLzf+RJoe8Z/yvjAAAAAElFTkSuQmCC",
            //description for the new post
            description: "Learning from 100xDevs in hope of getting placed",
        }])
    }


    //JSX render the App component UI 
    return(
        <div style={{ backgroundColor:"#dfe6e9", height:"100vh", width:"100vw" }}> {/*styling the main div or container */}

            <button onClick={Addpost}>Add Post</button>  {/*add a buttton to add new post like linkedin */}

            {/*Flex conatiner to center the content */}
            <div style={{ display:"flex", justifyContent:"center" }}>

                {/* contianer for the list of posts */}
                <div>
                     {/*Rendering the list of PostComponent  */}
                    {postcomponents}
                </div>
            </div>
        </div>  
    )
}

export default App;
// first we click the button then control goes over function Addpost which spreads our existing empty  state variablle array 'posts' then it add the new post at the end
//then post array updates and postcomponents changes in App function and in the last we rendred it in return 