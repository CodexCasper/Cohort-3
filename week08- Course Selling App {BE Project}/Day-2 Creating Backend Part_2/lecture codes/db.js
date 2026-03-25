const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema  ({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
});

const adminSchema = new Schema ({
    email:{ type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
});

const courseSchema = new Schema ({
    title: {type:String, unique: true},
    description: String,
    price: Number,
    imageurl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    creatorId: ObjectId,
    userId: ObjectId
});

const usermodel = mongoose.model("user",userSchema);
const adminmodel = mongoose.model("admin",adminSchema);
const coursemodel = mongoose.model("course",courseSchema);
const purchasemodel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}