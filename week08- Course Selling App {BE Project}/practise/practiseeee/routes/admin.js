const { Router } = require("express")
const adminRouter = Router()
const { adminmodel , coursemodel } = require("../db")

const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_ADMIN_PASSWORD } = require("../config");

const { adminMiddleware } = require("../middleware/admin")

adminRouter.post('/signup' , function(req,res){
    const requiredbody = z.object({
        email:z.string().max().min(4).email(),
        password:z.number(),
        firstname:z.string(),
        lastname:z.string()
    })

    const parseBodyWithSuccess = requiredbody.safeparse(req.body);

    if(!parseBodyWithSuccess.success){
        return res.status(400).send({
            message:"Incorrect format",
            error:parseBodyWithSuccess.error
        })
    }
    try {
        const { email , password , firstname , lastname } = req.body;

        const hashpassword = await bcrypt.hash(password,10);

        await adminmodel.create({
            email,
            password: hashpassword,
            firstname,
            lastname
        })
    } catch (e) {
        res.json({
            message:"invalid credentials"
        })
    }
    res.json({
        message:"signup endpoint for admin , you are successfully signed up"
    })
})

adminRouter.post('/signin' , function(req,res){
    const requiredbody = z.object({
        email:z.string().min(3).max().email(),
        password:z.string().min(3).max()
    })

    const parseBodyWithSuccess = requiredbody.safeparse(req.body);

    if(!parseBodyWithSuccess.success){
        res.status(400).json({
            message:"invalid credentials",
            error:parseBodyWithSuccess.error
        })
    }

    const { email , password } = req.body;
    
    const admin = await adminmodel.findone({
        email: email
    })

    if(!admin){
        return res.status(400).json({
            message: "user have not registered"
        })
    }

    const passwordMatch = await bcrypt.compare(password,admin.password);

    if(passwordMatch){
        const token = jwt.sign({
            id:admin._id.toString()
        }, JWT_ADMIN_PASSWORD)
        res.json({
            token: token
        })
    }else{
        res.json({
            message:"incorrect credentials"
        });
    }

    res.json({
        message:"signin endpoint for admin you are successfully signed in"
    })
})

adminRouter.post('/course' ,adminMiddleware,async function(req,res){
    const adminId = req.adminId;

    //using zod schema to validate the request body
    const requiredbody = z.object({
        title: z.string().min(3),
        description: z.string().min(3),
        imageurl: z.string(),
        price: z.number().positive()
    });

    const parseDataWithSuccess = requiredbody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        return res.status(403).json({
            message:"Invaid credentials",
            error: parseDataWithSuccess.error
        });
    }

    const { title, desription ,imageurl, price } = req.body;

    const course = await coursemodel.create({
        title: title,
        description : description,
        imageurl: imageurl,
        price : price,
        creatorId : adminId
    })

    res.json({
        message:"cpourse created",
        course: course._id
    })
    res.json({
        message:"new course creation endpoint for admin"
    })
})

adminRouter.put('/course' , function(req,res){
   const adminId = req.adminId

    const requiredbody = z.object({
        courseId: z.string().min(5),                    
        title: z.string().min(3).optional(),            
        description: z.string().min(3).optional(),      
        imageurl: z.string().min(3).optional(),        
        price: z.string().min(3).optional(),            
    })
   
    const parseBodyWithSuccess = requiredbody.safeParse(req.body);

    if(!parseBodyWithSuccess){
        return res.json({
            message:"invalid format !",
            error: parseBodyWithSuccess.error
        })
    }

    const { title, description, imageurl, price, courseId } = req.body;

    const course = await coursemodel.findone({
        _id: courseId,
        creatorId: adminId
    })

    if(!course){
        return res.status(400).json({
            message: "course can not be found"
        })
    }

    await coursemodel.updateone({
        _id: courseId,
        creatorId: adminId,
    },{
        title: title,
        description: description,
        imageurl: imageurl,
        price: price
    })

    res.json({
        message:"course updated",
        courseId: course._Id
    })
})

adminRouter.get('/course/bulk' , function(req,res){
     res.json({
        message:"to get all the courses endpoint for admin"
    })
    
})


module.exports = {
    adminRouter: adminRouter
}