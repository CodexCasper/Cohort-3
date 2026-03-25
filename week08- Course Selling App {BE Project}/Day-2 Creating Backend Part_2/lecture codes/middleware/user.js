//Installing the dependencies 
const jwt = require("jsonwebtoken");

//now we must import this password here bcoz this password exists in "./routes/user.js" and we can import this password from user.js and import it here in this file but the problem is it will create circular dependency means booth will import export smthng in b/w them
const {JWT_USER_PASSWORD} = require("../config")


//writing an user middleware to authenticate the user
function usermiddleware (req,res,next){
    //we are abstracting the token from the headers as we expect the user will return here
    const token = req.headers.token;

    //now we must verify our token that we got during signin with the diff password which is 'JWT_USER_PASSWORD' and store in var 
    const tokenverify = jwt.verify(token,JWT_USER_PASSWORD);  
    
    //now we are checking if the condition is true and if yes then
    if(tokenverify){
        //we must store it inn req.userId bcoz request is used by all the routes and we can easily access this 
        req.userId = tokenverify.id;
        next();
    }
    else{
        res.json({
            message:"invalid credentials"
        })
    }
}

module.exports = {
    usermiddleware: usermiddleware
}