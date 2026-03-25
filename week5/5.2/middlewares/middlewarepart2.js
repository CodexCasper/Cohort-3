// TOPIC: Better routing , add databases , middlewares 

//request-response cycle - when at frontend we gave some input http://localhost:3000/add?a=1&b=2 this is our endpoint, when we hit this it hit HTTP server and at there wee have app.get handler and it responds to it

//IN EXPRESS, middlewares refers to the function which has access to -> 'request' & 'response' object and 'next' function in the application request-response cycle
//can perform variety of tasks
// 1. modify the request and response objects 
// 2. can end the request response cycle
// 3. also can call the next function in the stack 


const express = require("express")

const app = express()

let request = 0;

//this functionn is very close to middlewares as it runs before before endpoints 
function requestIncreaser(req,res,next){
    request += 1;
    console.log("Total no of requests " + request);
    req.name = "Parrth";// we are changing the object
    next();// when this function gets called ,the next handler get called 'handlingSum', if we dont use next then 'handlingSum' will never gets called 

/* ending the request response cycle example =>
    res.json({
        msg:"fuck yourself"})
*/

}

// first endpoint
function handlingSum(req,res){ 
    
    // main logic
    const a  = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    console.log(req.name)// and it is printing that , as middleware can access 'req.name'
    
    res.json({
        "sum": a + b
    })
}


// second endpoint
function handlingMultiply(){

    //main logic
    const a  = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    
    res.json({
        "multiply": a * b
    })
}

// app.use(requestIncreaser); => if we use this then we do not need to write middleware fn in bw handlers , means all the handlers after will get use it 

app.get("/sum",requestIncreaser, handlingSum); // a cleaner way to use middleware( a middle man ) first checks the middleware fn then if it wants it will go to 'handlingsum' function
app.get("/multiply", handlingMultiply); // if  we dont want to use middleware in in multiply we have a option to not 

app.listen(3000,() => {
    console.log('server running on http://localhost:3000')
})