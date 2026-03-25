//installing all the dependencies 
const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

//importing all the routers
const { courseRouter } = require("./routes/course")
const { userRouter } = require("./routes/user")
const { adminRouter } = require("./routes/admin")

const app = express();

app.use("/user", userRouter);                           ////yaha prefix daal diye ki "/user" se jo bhi req ayega woh userRouter ke pass jyega 
app.use("/course", courseRouter);                          // same yaha pr bhi prefix dal diye kiye ki "/course" se jo bhi req ayega vo courseRouter ke pass jayega
app.use("/admin", adminRouter);


//this function will make sure that first our database responds and connected the it listens to port 3000
async function main(){
await mongoose.connect("mongodb+srv://parthbindal5:NoExitparth@cluster0.nbytjoo.mongodb.net/Coursera-app");     //await because it will return promise 
app.listen(3000, () => {
    console.log("The server is running on server => http://localhost//3000")    //the problem with this it will listen to the server but our database waits or might not be ready 
    console.log("listening")
  })
}
main();