const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
const { z }= require("zod");

const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")

/*basically the express is the function , but this is not a server , so we are calling it bcoz express() is a server not express
and it returns a app object that we can use that can handle http requests  
*/
const app = express();

/*below lines we are importing a function written over in user(knowledge) , means ki instead of writing everything we wrote
that in a function and import -> call it
better way is routing only
*/
//const { createUserRoutes } = require('./user');
//createUserRoutes(app);

//const { userCourseRoutes } = require('./course');
//userCourseRoutes(app)

async function main(){
    await mongoose.connect("mongodb+srv://parthbindal5:NoExitparth@cluster0.nbytjoo.mongodb.net/coursera_app")
    app.listen(3000 , () => {
        console.log("the server is listening on port http://localhost//3000")
    });
}

main();


