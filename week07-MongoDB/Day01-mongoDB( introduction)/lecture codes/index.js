
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


//IMPORTING MODELS IN js that we have created in DB.js
const { UsermodelAccess , todosmodelAccess } = require("./DB")

const app = express();
const JWT_SECRET = "kisi_ko_nahi_bataunga";                                 //using secret and encode and decode 

mongoose.connect("mongodb+srv://parthbindal5:NoExitparth@cluster0.nbytjoo.mongodb.net/TODO_APP_DATABASE");          //how will it know where to store, so it connects us with mongo 

app.use(express.json());                                                   //body ko parse krne ke liye use krte hai

app.post("/signup", async function(req,res){                //here we are signin up users detalils through postman 
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    //this is asynchronous function means it will return promise and will automatically return back after requesting from a server wherever it is posted
    await UsermodelAccess.create({                         // 'usersmodelAccess.create' is a high level function which we can use to put our data in database and that is why we need models so that we can specify where we can put our data 
        email:email,                                    // here if user enters same email twice application crashes and will fix later 
        password:password ,
        name:name
    });
    res.json({
        message:"you are signed up"
    })
    // the reason to use await is if database fails to store data but user will get to see that they are logged in but they are not
    console.log(req.body);
});

app.post("/login", async function(req,res){

    const email = req.body.email;
    const password = req.body.password;            // here there is no need of name , we need only UsermodelAccess email and password

    //fetches the data from databases 
    const user = await UsermodelAccess.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if(user){                                               //if user is true
        const token = jwt.sign({                            //then encode the userid as token 
            id: user._id.toString()                           //here comes the payload last week 7 it was username and here it is 'id' we can see in the database that if we can find the id's thn we can find the  user 
        }, JWT_SECRET);                                        //toString is used because userId is of objectId type 
        res.json({
            token: token
        });
    }
    else{
        res.status(403).send({
            message:"lawde password dalna nhi ata kya"
        });
    }
});

//THE TOKEN WE GENERATED AFTER SIGNIN IS NEEDED TO AUTHENTICATE THESE TWO BELOW
//create todo 
app.post("/todo",auth, async function(req,res){             // jese hi middleware sab kuch pass kr dega so the control will reach over here in todo and todos routes 
    const userId = req.userId;                             // middleware ke pass se jo req.userId jispe decodedData ka id hai woh idhr pass on hua 
    const title = req.body.title;                         // yaha se title input denge 
    const done = req.body.done;

    await todosmodelAccess.create({               //database call isliye await kiya
        userId,                              //TodoModel wale collection me ye create ho jayega 
        title,
        done
    })

    res.json({
        message:"your to do is created"
    })
});

//user ka todos return karega 
app.get("/todos",auth, async function(req,res){          //yeh kaunsa todo kis user ka hai woh return krne k liye..ki like kaunsa userId pe kya kya todo hai yeh btayega woh
    const userId = req.userId;                      //if the control reaches here that means there should be a authenticated endpoint and middleware ke pass se jo req.userId jispe decodedData ka id hai woh idhr pass on hua 

    const todos = await todosmodelAccess.find({                    //userId se woh todos ko search kr lega for this specific id provided to it
        userId
    })

    res.json({                              //todos sare output pr milenge users ko 
        todos
    })
});


function auth(req,res,next){                                //authentication middleware to check if the user is logged in or not
    const token = req.headers.token                                     // abstracting the token
    const decodedToken = jwt.verify(token,JWT_SECRET)                  // after decoding we must verify token and store in a var

    if(decodedToken){                                                  //if decodedToken is true then
        req.userId = decodedToken.id;                                      //req.userId me store kara kyuki req is common and sab routes ek hi req use krte hai so that we can acces it directly in our authenticated endpoints(todos,Todo)
        next();                                                     // passing to next function 
    }
    else{
        res.status(403).send({
            message:"incorrect credentials"
        })
    }
}

app.listen(3000,() =>{
    console.log("The server is running on => http://localhost:3000");
});

