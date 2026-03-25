//Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in?

const express = require("express")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "Iloveyourdiscipline"

const app = express();

app.use(express.json());

const users = [];

function logger(req,res,next){
    console.log(req.method + "request came");
    next();
}

app.post("/signup",logger, function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        message:"you have successfully signedup"
    })
    console.log(users);
})

app.post("/signin",logger, function(req,res){
    const username= req.body.username;
    const password = req.body.password;
/*
    let foundUser = users.find(function(u){
        if(u.username == username && u.password == password){
            return true;
        }
        else {
            return false;
        }
    })
*/
let foundUser = null;
for(let i =0 ; i < users.length; i++ ){
    if(users[i].username == username && users[i].password == password){
        foundUser = users[i];
    }
}
    if(foundUser){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        res.header("jwt",token); // this is being used to send back jwt to response headers
        res.header("name","Parth Bindal")
    
    res.json({
        token: token
    })
}
    else{
        res.status(403).send({
            message:"inavlid username or password"
        })
    }
console.log(users);
})

function auth(req,res,next){// a middleware to verify whether user logged in or not and to not write the same code over and over again
    const token = req.headers.token;//abstracting the token
    const decodedInformation = jwt.verify(token,JWT_SECRET);

    if(decodedInformation.username){
         req.username = decodedInformation.username;// we know that we can modify the request or response objects , also 'decodedInformation' variable is not present in '/me'so we use the request object(req) which is same as 'req' of "/me" and now we can use it in /me
         //in simple manner we can say that we are passing data using req object 
         next();
    }
    else{
        res.json({
            message:"you are not logged in"
        })
    }
}
app.get("/me",logger,auth,function(req,res){
   
    let foundUser = null;
    for( let i = 0 ; i < users.length ; i++ ){
        if( users[i].username == req.username){ //yaha req.username kiye hai aur decodedData.username nhi kiye hai kyuki req.username middleware se pass hokr is wale get method me aa rha hai
            foundUser = users[i];
        }
    }
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }
    else{
        res.status(403).send({
            message:"unauthorized"
        })
    }
})

app.listen(3000,() =>{
    console.log("the server is running on http://localhost:3000");
})  

// Notes:
// - Jitne bhi middleware hote yeh sare same req aur res use krte hai...isliye hmlg line 66 mein req.username mein decodedData.username ko store kr diye hai aur ussi ko niche wle get route mein add kr diye line 82 mein jisse woh username share ho pa rha hai..so aise hi yahi se we can pass dat through the middleware to next method or the get route