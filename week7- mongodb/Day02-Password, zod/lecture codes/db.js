const mongoose = require("mongoose");               //importing the mongoose library 

const Schema = mongoose.Schema;                          // we must import schema from mongoose
const ObjectId = mongoose.ObjectId;                     //userId is of diff type call objectId that's why we must import it too

const User = new Schema({                                   // building first schema
    email: {type: String,required:true, unique: true}, // email should be unique, means wee cant put same data entry twice in the database     
    password: {type: String,required: true}, 
    name: String  
});

const Todo = new Schema({                                      //building second schema 
    userId: ObjectId,               //userid is the id of user above and we must call it or store it in Todo to carry a relationship between them
    title: String,              //i.e go to gym , eat healthy food etc 
    done: Boolean
});

const Usermodel = mongoose.model("USERS",User);             //here we are defining that where we are our actual data in mongodb collection called "USERS"
const Todomodel = mongoose.model("TODOS",Todo);                 //SAME FOR TODOS

module.exports = {                                  // since we are writing the db code in seperate file then we must export it too 
    Usermodel,
    Todomodel   
}