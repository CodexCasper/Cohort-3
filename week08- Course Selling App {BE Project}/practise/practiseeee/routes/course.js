const { Router } = require("express")
const courseRouter = Router();

    courseRouter.post('/course/purchase' , function(req,res){
        res.json({
            message: "course purchase endpoint"
        })
    })

    courseRouter.get('/preview' , function(req,res){
        res.json({
            message: "preview endpoint"
        })
    })


module.exports = {
    courseRouter: courseRouter
}