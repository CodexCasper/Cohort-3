//REPLACING TOKEN LOGIC WITH JWT 
// install npm install jsonwebtoken before running the cmmnd 
const express = require("express");
const jwt = require("jsonwebtoken"); // external library 

const JWT_SECRET = "iloveyourdiscipline"// whenever we use jsonwebtoken , we need to create a password associated with it to encode but it's not ecryption

const app = express();// express returns a function that is why we are calling it and storing it in a instance 


app.use(express.json());

const users = [];

app.post("/signup",function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message:" you have successfully signed up "
    })
console.log(users);
})

app.post("/signin", function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for( let i = 0 ; i < users.length ; i++ ){
        if( users[i].username == username && users[i].password == password ){
            foundUser = users[i];
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username: username // whenever we 'sign' it we have an object(ussername) and this will become the same as /me decodedinformation
        },JWT_SECRET ); // convert username into a JWT 

       // foundUser.token = token;

        res.json({
            token: token
        })
    }
    else{
        res.status(403).send({
            message:" invalid username or password "
        })
    }
console.log(users);
})

app.get("/me",function(req,res){
    const token = req.headers.token; // jwt
    const decodedInformation = jwt.verify(token,JWT_SECRET);
    const username = decodedInformation.username; 

//finding in database if the same username exists there or not 
    let foundUser = null;
    for (let i = 0 ; i < users.length ; i++ ){
        if( users[i].username == username ){
            foundUser = users[i];
        }
    }
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else{
        res.send(403).send({
            message: " unauthorized "
        })
    }
})

app.listen(3000,() =>{
    console.log("the server is running on http://localhost:3000");
})  
