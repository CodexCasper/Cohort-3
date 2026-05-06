// Question : # Create an HTTP Server

// It should have 4 routes

// 1. http://localhost:3000/multiply?a=1&b=2
// 2. http://localhost:3000/sum?a=1&b=2
// 3. http://localhost:3000/divide?a=1&b=2
// 4. http://localhost:3000/subtract?a=1&b=2

// Inputs given at the end after `?` are known as query parameters (usually used in GET requests)
// The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)


const express = require("require");
const app = express();

//to make the input dynamic we use /:a/:b
app.get("/add/:a/:b", function(req,res){// ':' here is catching everything whatever comes 
    const a = parseInt(req.params.a);  //pareInt is done because hm input string ke form mei le rhe hai toh data stype string hoga toh 1+2 = 12 honjyega isliye int ban jaye isliye parseInt use kr rhe jisse 1+2=3 hoga na ki 12
    const b = parseInt(req.params.b);// whatever no we pass on localhost it get added as a string , so we use a function in node js called 'parseInt'

    res.json({
        return: a + b
    })
})

//1st route handler 
app.get("/mutliply", function(req,res){
    const a = parseInt(req.query.a);// extracted a from all , and all the details of a is stored in 'req'
    const b = parseInt(req.query.b);

    res.json({
        return: a * b
    })
})

app.get("/divide", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        return: a / b
    })
})

app.get("/subtract", function(req,res){
    const a  = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        return: a - b 
    })
})

app.listen(3000, () => {
    console.log('server running');
})