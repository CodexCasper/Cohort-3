//Import the router object from the express module to create route handlers
const {Router} = require("express");

//create a new courseRouter instance that works like app but for courseRouter only 
const courseRouter = Router();

//importing the models from the db to interact with the purchase and course data 
const { purchasemodel } = require("../db")

//import middleware so that we can autheticate every route 
const { usermiddleware } = require("../middleware/user");

//define a POST route for purchasing courses , with a user middleware to authenticate the user also
courseRouter.post("/purchase",usermiddleware ,async function(req,res){
    //Extract userId from the request object , which was sent by the usermiddleware 
    const userId = req.userId;

    //Extract courseId fromm the request body sent by the client
    const courseId = req.body.courseId;

    //if the courseId is not found in th request body, return the error response to the client 
    if(!courseId){
        return res.status(404).send({
            message:"please provide a courseId",
        });
    }

    //check if course is already purchasedmodel
    const existingpurchase = await purchasemodel.findOne({
        courseId: courseId,
        userId: userId,
    });

    //if user has this existingcourse then return error response to client
    if(existingpurchase){
        return res.json(400).send({
            message:"course already purchased"
        });
    }

    ///trying to create a new purchase entry if he user buys the course     
    await purchasemodel.create({
        courseId: courseId,      //the ID  of the course being purchased
        userId: userId,         //the Id of the user making the purchase 
    })

    res.status(200).json({
        message:"you have successfully purchased the course"
    })
})

//defining the route for previewing the courses details without authentication
courseRouter.get("/preview",async function(req,res){

    const courses = await coursemodel.find({});         //empty array which means give me all the courses 

    // Return the queried course details as a JSON response to the client with a status code
    res.status(200).json({
        courses: courses,                   // Send the course details back to the client
    });
});

module.exports = {
    courseRouter: courseRouter
}