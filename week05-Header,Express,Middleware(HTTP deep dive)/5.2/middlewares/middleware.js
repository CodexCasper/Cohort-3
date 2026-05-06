// TOPIC: Better routing , add databases , middlewares 

//request-response cycle - when at frontend we gave some input http://localhost:3000/add?a=1&b=2 this is our endpoint, when we hit this it hit HTTP server and at there wee have app.get handler and it responds to it

//IN EXPRESS, middlewares refers to the function which has access to -> 'request' & 'response' object and 'next' function in the application request-response cycle
// can perform variety of tasks
// 1. modify the request and response objects 
// 2. can end the request response cycle
// 3. also can call the next function in the stack 


const express = require("express")

const app = express()

let request = 0;

//this function is very close to middlewares as it runs before endpoints 
function requestIncreaser(req,res){
    request += 1;
    console.log("total no of requests " + request);
    //req.request = request;// we are accessing the request of our ednpoints from here 

}

// first endpoint
app.get("/sum", function(req,res){ // 2nd way to write app.get("/add", requestIncreaser, function(req,res){ })
    requestIncreaser(req,res);
    
    // main logic
    const a  = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    
    res.json({
        "sum": a + b
    })
})

// second endpoint
app.get("/multiply", function(req,res){
    requestIncreaser(req,res);

    //main logic
    const a  = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    
    res.json({
        "multiply": a * b
    })
})

app.listen(3000,() => {
    console.log('server running')
})