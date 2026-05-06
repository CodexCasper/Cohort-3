// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require("express")

const app = express();

function middleware(req,res,next){
    console.log("The method is" + req.method); // we can google how we can log method in middleware 
    console.log("The url is" + req.url);
    console.log(new Date());

    next();
}

app.use(middleware);

app.get("/sum", function(req,res){
    res.json({
        msg:"done!"
    })
})

app.listen(3000);