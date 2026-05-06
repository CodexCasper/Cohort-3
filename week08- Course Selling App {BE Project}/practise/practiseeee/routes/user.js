const { Router } = require("express");

const userRouter = Router();

    userRouter.post('/user/signup' , function(req,res){
        res.json({
            message: "signup endpoint"
        })
    })

     userRouter.post('/user/signin', function(req,res){
        res.json({
            message: "signin endpoint"
        })
    })
//endpoint for user when they wants to know what are the courses they purchsed on a course sellig website
     userRouter.get('/course/purchases', function(req,res){
        res.json({
            message: "purchased course endpoint"
        })
    })


module.exports = {
    userRouter: userRouter
}