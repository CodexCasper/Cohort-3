// Below code is like we have created our own http server sort of and this had four endpoints 
// http://localhost:3000/add?a=1&b=2, this is being called on frontend 

const express = require("require");
const app = express();

//to make theinput dynamic we use /:a/:b
app.get("/add/:a/:b", function(req,res){// ':' here is catching everything whatever comes 
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);// whtever no we pass on localhost it get added as a string , so we use a function in node js called 'parseInt'

    res.json({
        return: a + b
    })
})

//1st route handler 
app.get("/mutliply", function(req,res){
    const a = req.query.a;// extracted a from all , and all the details of a is stored in 'req'
    const b = req.query.b;

    res.json({
        return: a * b
    })
})

app.get("/divide", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

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