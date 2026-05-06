// we can insert hsi code in index.js also but for better structure we are writing here

const mongoose = require("mongoose");        // importing mongoose library , this library is needed to talk to mongodb 

const Schema = mongoose.Schema;             //blueprint of our data //mongoose library exports class call 'schema', and although mongoose is schemaless then also we are defining schema just for a better structure   ,        
const ObjectId = mongoose.ObjectId;           //special ID mongodb uses to uniquely identify things //since the password in our Todo is of objectId so we must import it from schema

//firSt schema
const user = new Schema({
    email: {type: String,required:true, unique: true}, // email must be string and can't be empty and also email should be unique, means wee can't put same data entry twice in the database     
    password: {type: String,required: true}, 
    name: String  
});

//second schema , we ar defining ki yar data kaisa dekhega 
const todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId  // this links todo -> user 
})


// CREATING MODELS
const UsermodelAccess = mongoose.model("USERS",user)       
// "USERS" is a collection name and user is schema so mongodb will create users(collection)
// basically we need models to put our actual data in database collections which here is (USERS)  , also we can say a tool to interact with database 
const todosmodelAccess = mongoose.model("TODOS",todo)       // one more model for todo collection in our mongo compass 

// EXPORTING models
module.exports = {
    UsermodelAccess,              /* since we want our code structure to be better we can't directly use models in index.js so we need to export it */
    todosmodelAccess
}

