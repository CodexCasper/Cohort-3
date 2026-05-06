/*
No need to do this as of now onwards!
const express = require("express");
const Router = express.Router;  // Create a new Router instance for user routes
*/

// Import the Router object from the express module to create route handlers , here {Router} is a class 
const {Router} = require("express");

// Create a new instance of the Router for defining the user-related issues , Router() is a fn
const userRouter = Router();

//Installing required dependencies
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken"); 


userRouter.post("/signup", async function(req,res){

    const requiredbody = zod.object({
        email: z.String().min(3).max(30).email(),
        password: z.String().min(3).max(40),
        firstname: z.String().min(3).max(50),
        lastname: z.String().min(3).max(20)
    });

    const parseDataWithSuccess = requiredbody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        res.json({
            message:" Invalid format !",
            error: parseDataWithSuccess.error
        });
    }

    try{
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    const hashpassword = await bcrypt.hash(password,10);
    console.log(hashpassword);

    await Usermodel.create({
        email: email,
        password: hashpassword,
        firstname: firstname,
        lastname: lastname
    });
    } catch(e){
        return res.status(400).json({
        message:"you are already signed up !"
    });
  }
    res.json({
        message:"you have successfully signed up !"
    });
});


userRouter.post("/signin", async function(req,res){

    const requiredbody = zod.object({

        email: z.String().min(3).max(100).email(),

        password: z.String().min(3).max(100)
    })

    const parseDataWithSuccess = requiredbody.safeparse(req.body);

    if(!parseDataWithSuccess.success){
       return res.status(400).json({
            message:"Incorrect format !",
            error:parseDataWithSuccess.error
        });
    }

    const { email , password } = req.body;

    const user = await Usermodel.findOne({
        email: email,
    });

    if(!user){
        return res.status(400).send({
            message:"Incorrect credentials !"
        });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)
    

    res.json({
        token: token,
    });
}
else{
        res.status(403).json({
            message:"Invalid credentials !"
        })
}
});

userRouter.get("/purchases" , async function(req,res){

})

module.exports = {
    userRouter: userRouter
}