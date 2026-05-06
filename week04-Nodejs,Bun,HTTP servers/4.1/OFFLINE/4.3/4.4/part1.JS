// TOPIC : MIDDLEWARES

const express = require("express"); // using express library by importing it from node modules, this module exports a function and we store tht in variable 'express'

// now we are calling express function , express() creates an app which is called an 'application instance' and we store that in instance in app 
const app = express();
// and then we can use app as an object 

// creating a check or we can say creating a function that checks whether the person visiting for ride is 14 or above years old
// 1ST WAY : below is the one way to introduce "CHECKING"
function itnebaddeho(age){
    if( age > 14 ){
        return true
    }
    else{
        return false;
    }
}

// creating a route , a specific URL path( /ride1 ) + HTTP method ( get,post ) that tells the server which code to run when someone hits the endpoint 
// below is the open route, no middleware is protecting it, anyone can access this 
app.get("/ride1", function(req,res){// we can access this route by writing path '/ride1' ater localhost 
    if( itnebaddeho(req.query.age) ){
    res.json({
        msg: " you rode your 1st bike " 
    })// Only res.* sends data back to the client, if we had use console etc then it returns on server not client and using JSON(api supported)
  }
  else{
    res.status(403).json({
        msg:" Go get bigger motherfucker"
    })
  }
})

app.get("/ride2", function(req,res){// we can access this route by writing path '/ride2' ater localhost 
    if( itnebaddeho(req.query.age) ){
    res.json({
        msg: " you rode your 2st bike " 
    })// Only res.* sends data back to the client, if we had use console etc then it returns on server not client and using JSON(api supported)
  }
  else{
    res.status(403).json({
        msg:" Go get bigger motherfucker"
    })
  }
})

app.listen(3000, () =>{
    console.log('Your code is on running on http://localhost:3000');
})


