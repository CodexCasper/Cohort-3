// using express routing for the better structure of the routes 

const { Router } = require("express");

const adminRouter = Router();

const { adminmodel } = require("../db")

adminRouter.post("/signup", function(req,res){

})

adminRouter.post("/signin", function(req,res){

})
//to create a course
adminRouter.post("/course", function(req,res){

})
//if the admin wants to change their course
adminRouter.put("/course", function(req,res){

})
//give me all the courses that i have created 
adminRouter.get("/course/bulk", function(req,res){

})



module.exports = {
    adminRouter: adminRouter
}