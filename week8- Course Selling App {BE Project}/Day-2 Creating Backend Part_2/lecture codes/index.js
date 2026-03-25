//importing the dotenv zero dependency module and also install npm install dotenv
require("dotenv").config()

const express = require("express");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const mongoose = require("mongoose");

//importing all the routers
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");

app.use(express.json());

app.use("/admin",adminRouter);
app.use("/course",courseRouter);
app.use("/user",userRouter);

async function main(){
  //now to use our mongo url we must use 'dotenv' which is stored in '.env' file
    await mongo.connect("process.env.MONGO_URL");      //we can not public our url so we kept in our.env file and when we will push it in github then it will it be ignored by using .gitignore file
    app.listen(3000, () => {
    console.log("The server is running on server => http://localhost//3000")    //the problem with this it will listen to the server but our database waits or might not be ready 
    console.log("listening")
  })
}
main();