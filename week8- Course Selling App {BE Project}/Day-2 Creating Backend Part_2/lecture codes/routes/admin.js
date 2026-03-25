//Install Router object from the express module to create route handlers, we are extracting the {Router} function from the express and its a that lets group routes easily
const { Router } = require("express")

//creating a new instance of Router for defining admin related issues
const adminRouter = Router();               // Router() creates a router instance and adminrouter behaves like a app but only for admin routes and now we can attach HTTP methods to it 

const { adminmodel, coursemodel } = require("../db");

//Installing dependencies
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//importing admin diff jwt password from config.js file
const { JWT_ADMIN_PASSWORD } = require("../config")

//importing the adminmiddleware 
const { adminmiddleware } = require("../middleware/admin")

//POST route to sign up for the admin
adminRouter.post("/signup", async function(req,res){
    //zod means schema validation
    const requiredbody = z.object({
        email: z.string().min(3).max(40).email(),
        password: z.string().min(6),
        firstname: z.string(),
        lastname: z.string()
    });
    // after validation we must parse the body
    const parseBodyWithSuccess = requiredbody.safeParse(req.body);

    if(!parseBodyWithSuccess.success){
       return res.status(400).json({
            message:"invalid format",
            error: parseBodyWithSuccess.error
        });
    }

    try{
        const { email,password,firstname,lastname } = req.body;

        const hashpassword = await bcrypt.hash(password,10);
        console.log(hashpassword);

        await adminmodel.create({
            email,
            password: hashpassword,
            firstname,
            lastname
        })
    } catch(e){
        res.json({
            message:"invalid credentials"
        })
    }
    res.json({
        message:"you are successfully signed up"
    })
})

//POST route to signin for the admin
adminRouter.post("/signin", async function(req,res){

    const requiredbody = z.object({
        email: z.string().min(5).max(40).email(),
        password: z.string().min(3).max(40)
    });

    const parseBodyWithSuccess = requiredbody.safeParse(req.body);

    if(!parseBodyWithSuccess.success){
        return res.status(400).json({
            message:"invalid format",
            error: parseBodyWithSuccess.error
        });
    }
    const {email,password} = req.body;

    const admin = await adminmodel.findOne({
        email: email
    });

    if(!admin){
        return res.status(403).json({
            message:"User have not registered"
        });
    }

    const passwordMatch = await bcrypt.compare(password,admin.password);

    if(passwordMatch){
        const token = jwt.sign({
            id:admin._id.toString()
        },JWT_ADMIN_PASSWORD)

        res.json({
            token: token
        });
    }else{
        res.json({
            message:"incorrect credentials"
        });
    }
})

//Define the admin routes for creating the course
adminRouter.post("/course",adminmiddleware, async function(req,res){
    //get the adminId from the request object that we created in "../middleware/admin"
    const adminId = req.adminId;

    //using zod schema to validate the request body
    const requiredbody = z.object({
        title: z.string().min(3),
        description: z.string().min(3),
        imageurl: z.string(),
        price: z.number().positive()
    });

    //now we must parse the required body data and validate it using safeparse not('parse') as parse function will either validate or return error
    const parseDataWithSuccess = requiredbody.safeParse(req.body);

    //if the data format is incorrect send the error and message to the client
    if(!parseDataWithSuccess.success){
        return res.status(403).json({
            message:"Invaid credentials",
            error: parseDataWithSuccess.error
        });
    }

    //get all these from request body
    const { title,description,imageurl,price } = req.body;

    const course = await coursemodel.create({
        title: title,
        description: description,
        imageurl: imageurl,
        price: price,
        creatorId: adminId          // add thee id of admin who created it 
    });

    //response with the success message if the course is created successfully
    res.send({
        message: "course created ",
        course: course._id,
    });
});

//Define if the admin wants to update course
adminRouter.put("/course",adminmiddleware, async function(req,res){

    //Get the admin id from the request object, set by the admin middleware 
    const adminId = req.adminId;

    //Define a zod to validate request body for updating course 
    const requiredbody = z.object({
        courseId: z.string().min(5),                    //Ensure course Id is atleast of 5 characters
        title: z.string().min(3).optional(),            //title is optional
        description: z.string().min(3).optional(),      //description is optional
        imageurl: z.string().min(3).optional(),         //image is optional
        price: z.string().min(3).optional(),            //price is optional
    })
    //parse and validate the the request body from the schema
    const parseBodyWithSuccess = requiredbody.safeParse(req.body);

    //check if the validation fails, repply the user with message and error
    if(!parseBodyWithSuccess){
        return res.json({
            message:"invalid format !",
            error: parseBodyWithSuccess.error
        })
    }

    //Destructure the validated fields from the request body 
    const { title, description, imageurl, price, courseId } = req.body;

    //Attempt to find the course in the db using adminId and courseId
    const course = await coursemodel.findOne({
        _id: courseId,

        //we need to write this line bcoz if there exists another admin and they uses the same courseId then they can manipulate other admin courses
        creatorId: adminId,             //suppose if admin A has give entered same courseId as admin B but admin A has its own unique creatorId now admin A can not manipulate admin B course
    });

    //if the course is not found respond with the error message
    if(!course){
        return res.status(404).send({
            message:"Sorry! course can not be found"
        });
    }

    //update the details of the course in the database using the updates object 
    await coursemodel.updateOne({
        _id: courseId,              //Match the course by Id
        creatorId: adminId,         //ensure the admin is the creator
    },{
        title: title,
        description: description,
        imageurl: imageurl,
        price: price,
    });

    res.json({
        message:"your course has been updated",
        courseId: course._Id
    });

})

//Define the admin routes for getting all courses 
adminRouter.post("/courses/bulk",adminmiddleware, async function(req,res){

    //get the admin id from the request object, set by the admin middleware
    const adminId = req.adminId;

    //find all the courses with the given creatorId
    const courses = await coursemodel.find({
        creatorId: adminId,
    });

    res.json({
        message:"courses updated",
        courses: courses,
    });
});

module.exports = {
    adminRouter: adminRouter
}