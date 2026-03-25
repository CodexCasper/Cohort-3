/*we also create objects 
var users = [{
      name:'parth' ,
      metadata:{
             profilepicture: "pii" ,
             address : {

             }
        }
}]
*/

/*
Question : Your logic is like a doctor
Learn by doing, lets create an in memory hospital

You need to create 4 routes (4 things that the hospital can do)

GET - User can check how many kidneys they have and their health
POST - User can add a new kidney
PUT - User can replace a kidney, make it healthy
DELETE - User can remove a kidney

What should happen if they try to delete when there are no kidneys?
What should happen if they try to make a kidney healthy when all are already healthy?
*/


const express = require("express");

const app = express();
//kind of mini databse
const users =[{ // this is an arr of objects 
    NAME: 'Parth bindal',
    KIDNEY: [{
        HEALTHY: false ,
        HEALTHY: false
    }]
}];

app.use(express.json());

//1st route
app.get("/", function (req,res){// to get this 'GET' request we clicl local host and we get it or '/' affter 3000 is also same 
    //write logic for 'get'
    const parthkidney = users[0].KIDNEY;
    const noofkidney = parthkidney.length;
    //to find how many healthy  and unhealthy kidneys 
    let noOfHealthyKidneys = 0;
    for( let i = 0 ; i < parthkidney.length ; i++ ){
        if( parthkidney[i].HEALTHY ){
            noOfHealthyKidneys += 1;
        }
    }
    const noOfUnHealthyKidneys = noofkidney - noOfHealthyKidneys;

    res.json({
        noofkidney,
        noOfHealthyKidneys,
        noOfUnHealthyKidneys
    })
})

app.post("/", function (req,res){
    //write logic for 'post'
    //we write 'post' logic usually in body, means another way to specify our input
    // console.log(req.body);
    const ishealthy = req.body.ishealthy; // way to get input, as in post we taking input and updating our database 
    users[0].KIDNEY.push({
        HEALTHY: ishealthy
    }) //  we can send post request using 'POSTMAN'
    res.json({
        msg:"done!"
    })
})

app.put("/", function (req,res){// put means 'UPDATING' , now put has to make all kidneys healthy 
    for( let i = 0 ; i < users[0].KIDNEY.length ; i++ ){
        users[0].KIDNEY[i].HEALTHY = true;
    }
    res.json({
        msg: "done!"
    });
})

app.delete("/", function (req,res){// we need to remove all the unhealthy kidney 
    //Q.What should happen if they try to delete when there are no kidneys?
    if (isThereatLeastOneUnhealthyKidney()){
    const newarr = [];
    for( let i = 0 ; i < users[0].KIDNEY.length ; i++ ){
        if (users[0].KIDNEY[i].HEALTHY){//'.HEALTHY'  AUTOMATICALLY FINDS TRUE OR FALSE , DONOT WRITE == TRUE
            newarr.push({
                HEALTHY: true
            })
        }
    }
    users[0].KIDNEY = newarr;
    req.json({
        msg:"done!"
    })
    }
    else{
        res.status(411).json({
            msg:"you have no bad kidneys"
        })
    }
})
function isThereatLeastOneUnhealthyKidney(){
    let atLeastOneUnhealthyKidney = false;// assuming initially there exists no unhealthy kidney
    for( let i = 0 ; i < users[0].KIDNEY.length ; i++ ){
        if (!users[0].KIDNEY[i].HEALTHY){// "users[0].KIDNEY[i].HEALTHY" means we are checking the kidney is healthy and '!' checks if unhealthy 
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney;
}


app.listen(3000, () =>{
    console.log('The server is working on website http://localhost:3000');
})



