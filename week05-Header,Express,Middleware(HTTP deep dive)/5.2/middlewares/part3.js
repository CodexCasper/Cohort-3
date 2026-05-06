const express = require("express")
const bodyparser = require("body-parser")// external library used to parse the body

const app = express();

// we can send body through postman and then are seeing error 
// in express, if we want to send JSON data     
// we need to first parse(convert it into the Javascript object) the data

app.use(express.json()); // but this is kinda middleware only , if we want to send json data
app.use(bodyparser.json()); // both do the same work

app.post("/sum", function(req,res){ // first when we send post request through POSTMAN 
    const a = parseInt(req.body.a);// in place of query we are getting input through body
    const b = parseInt(req.body.b);// it will show undefined as 

    res.json({
        msg: a + b
    });
});

app.listen(3000);