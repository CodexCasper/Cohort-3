/*
No need to do this as of now onwards!
// Import express module
const express = require("express");
// Create a new Router instance for user routes
const Router = express.Router;
*/


//import the router object from the express modules to create route handlers
const { Router } = require("express");

//creating a new instance of the router for defining user related routes
const userRouter = Router();

//installing dependencies
const { z } = require("zod");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//importing the 'usermodel' from the db 
const {usermodel,coursemodel,purchasemodel} = require("../db");

//importing the user diff. jwt password form config jwt file
const { JWT_USER_PASSWORD } = require("../config")

//creating an instance call app for express
const app = express();

//we we must use this line as we have to parse all the req.body data 
app.use(express.json());

userRouter.post("/signup", async function(req,res){
    const requiredbody = z.object({
        email: {type: String, unique: true},
        password: String,
        firstname: String,
        lastname: String
    })

    const parseBodyWithSuccess = await requiredbody.safeparse(req.body);

    if(!parseBodyWithSuccess.success){
        return res.status(400).json({
            message:"invalid format !",
            error:parseBodyWithSuccess.error
        })
    }
    try{
        const hashpassword = await bcrypt.hash(password,10);
        console.log(hashpassword);

        const {email,password,firstname,lastname} = req.body;

        await usermodel.create({
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        })
    } catch(e){
        res.json(403).send({
            message:"invalid credentials !"
        })
    }
    res.json({
        message:"you are successfully signed up"
    })
});

userRouter.post("/signin", async function(req,res){
    const requiredbody = z.object({
        email: { type: String, unique: true},
        password: String
    })

    const parseBodyWithSuccess = requiredbody.safeparse(req.body);

    if(!parseBodyWithSuccess.success){
        res.json({
            message:"invalid format !",
            error:parseBodyWithSuccess.error
        })
    }
    const {email,password} = req.body;
    const user = await usermodel.findOne({              //Here if we use 'find' then it will find all the users and return an empty array and when we will check the user in if condition then the empty array is always true that is why we will get token everytime in postman even with wrong password everytime
        email: email
    })

    if(!user){
        res.json({
            message:"user have not registered !",
            error:parseBodyWithSuccess.error
        })
    } else{
        const passwordMatch = await bcrypt.compare(password,user.reponse);

        if(passwordMatch){
            const token = jwt.sign({
                id:user._id.toString()                              // in our database we can see that id is in the form "_id" that'whhy we used '._id'
            },JWT_USER_PASSWORD)                    //we must use jwt password to encode the id for the saffety purpose
        
        res.json({
            token: token
        })
    }else{
        res.json({
            message:"incorrect credentias !"
        })
    }
    }
});

userRouter.get("/purchases", usermiddleware, async function(req,res){
    const userId = req.userId;

    //when we will GET request of purchases in postman then it will return objctId type of courses and its Id
    const purchases = await purchasemodel.find({
        userId: userId,
    })

    if(!purchases){
        return res.json({
            message:"no purcahses found",
        });
    }

    //if the purchases are found , extract the courseIds from the found purchases 
    const purchaseCourseIds = purchases.map((purchase) => purchase.courseId);

    //find all the details associated with the courseIds
    const courseData = await coursemodel.find({
        _id: {$in:purchaseCourseIds},
    })

    res.json({
        courseData,
        purchases,
    });
});

module.exports = {
    userRouter: userRouter
}