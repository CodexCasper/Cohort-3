const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const{ z } = require("zod");

const { Usermodel, Todomodel } = require("./db")
const { auth, JWT_SECRET } = require("./auth")                      //for better structure auth middleware in seperate file and here we import it

const app = express();
// const JWT_SECRET = "Iloveyourdiscipline"                         // no JWT_SECRET here bcoz we used it in our middleware in seperate file

app.use(express.json());                                           //parsing the body 

mongoose.connect("mongodb+srv://parthbindal5:NoExitparth@cluster0.nbytjoo.mongodb.net/TODO_APP_DATABASE");            //this is how we can connect our backend to the database , if we will comment out this line and calls out routes then it must crashes

app.post("/signup", async function(req,res){
    const requiredbody = z.object({                                           //in our required body we want a object to look like this or we can say we are defining what type of "SCHEMA" we want 
        email:z.String().min(3).max(100).email() ,                             //calling zod library and defining that we only want string as input and min of letters must be'3' and max '100'
        password:z.String().min(3).max(100) ,
        name: z.string().min(3).max(30)

    });
    // AFTER zod we must parse our data
    const parsedDataWithSuccess = requiredbody.safeparse(req.body);                //"req.body" is our INPUT and "requiredbody" is our OUTPUT and we are not using strict format here after 'req.body' so in postman if we in includes more var like suppose address then it will store
    //const parsedData = requiredbody.parse(req.body)                              //second way to perform parsing but the problem with this is either it will throw success or it will throw an error 


    /*representation of "safeparse" returns us data 
    {
     success: true || false,
     data:{},
     error:{}
    
    } */

     
    if(!parsedDataWithSuccess.success){                                             //now we must check if the parsed data is correct or not and if not then
        res.json({
            message: "Invalid format !",
            error: parsedDataWithSuccess.error                    //FIRST WAY of doing "safeparse" FUNCTION itself give us a list of error that we can directly show to user and to use it we can directly show it in res.json
        })
        return                                                                      //then we must return message to the user
    }

    
    /* i.e. req.body      , if we want that our req.body should be string then we must declare this in zod(schema validation)
    {
       email:String,
       password:String,
       name:String 
    }
    */


    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

/*
    //1. input validation but it is the ugly way to do it
    if( typeof email !== String() || email.length() < 5 || !email.includes("@") ){
        res.json({
            message:"incorrct email !"
        })
        return
    }
*/

    // below will throw the error bcoz in 'db.js' we defined the email constraint that it should be unique and when we will signup again with the same email then the wholee backend crashes then we must use 'try and catch'
    let errorthrown = false;                                        // at first we are assuming that error is not thrown it is false
    try {                                                           //trying the code first
    const hashpassword = await bcrypt.hash(password,5);             // '5'(saltrounds) is how long we want our salt to run , also bcrypt gives us both callback function(err,data) which can be called after saltrounds and promisified function(await) 
    console.log(hashpassword);

    await Usermodel.create({                                        //storing in the database in the collection 
        email: email,
        password: hashpassword,                                     // we can see hash password in mongo compass
        name: name
    });

    } 
    catch(e){                                                     // this means that try running the code above and catch if there is any exception and feel free to run if afterwards without throwing any exception
      res.json({
        message:"user already exists !"
      })
      return;
    errorthrown = true;
}

   if(!errorthrown){                                               //if the error is not thrown
    res.json({
        message:"you are successfully signed in ! "
    })
  }
});

app.post("/login",async function (req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await Usermodel.findOne({
        email: email                                    //there is no need of password as we can not compare the plaintext with the hashpassword
    })

    if(!user){                                      // if the mail is not the one user used to make a id when they were signing up
        res.status(403).json({
            message:"you doesn't exist in our db !"
        })
    };

    const passwordmatch = bcrypt.compare(password, user.password);          //bcrypt provides a fn which we can use to compare the hash password with the password everytime user enter when they login or we can also decrypt the hashpassword by writing the whole algorithm
                                                                                //'user.password' is the actual hashpassword stored in db which we are comparing
    if(passwordmatch){                                                          // if the hashpassword matches then convert it into token
        const token = jwt.sign({                //jwt here is the name of the var in which imported "jsonwebtoken" lib so we must use jwt which is the var name
            id: user._id.toString()
        },JWT_SECRET)

    res.json({
        token: token 
    })
}
else{
    res.status(403).send({
        message:"incorrect credentials"
    })
}
console.log(user);
})

app.post("/Todo",auth, async function(req,res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await Todomodel.create({
        userId,
        title,
        done
    })
    res.json({
        message:"Your todo is created !"
    })
});

app.get("/todos",auth,async function(req,res){
    const userId = req.userId;

    const todo = await Todomodel.find({
        userId
    })
    res.json({
        todo: todo
    })
});

app.listen(3000, () =>{
    console.log("the server is runnning on => http://localhost:3000");
});

/*notes
1.run npm install bcrypt, installing popular library which we will use to hash our password 
2.
*/