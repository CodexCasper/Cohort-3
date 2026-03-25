// we can insert hsi code in index.js also but for better structure we are writing here

const mongoose = require("mongoose");        // importing mongoose library 

const Schema = mongoose.Schema;              //mongoose library exports class call 'schema', and although mongoose is schemaless then also we are defining schema just for a better structure           
const ObjectId = mongoose.ObjectId;            //since the password in our Todo is of objectId so we must import it from schema

//firSt schema
const user = new Schema({
    email: {type: String,required:true, unique: true}, // email should be unique, means wee cant put same data entry twice in the database     
    password: {type: String,required: true}, 
    name: String  
});

//second schema , we ar defining ki yar data kaisa dekhega 
const todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})


// CREATING MODELS
const UsermodelAccess = mongoose.model("USERS",user)       //basically we need models to put our actual data in database collections which here is (users) 
const todosmodelAccess = mongoose.model("TODOS",todo)       // one more model for todo collection in our mongo compass 

// EXPORTING models
module.exports = {
    UsermodelAccess,              /* since we want our code structure to be better we can't directly use models in index.js so we need to export it */
    todosmodelAccess
}

