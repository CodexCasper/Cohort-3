const express = require("express")

const app = express();


// 2ND WAY : USING MIDDLEWARES
function usingMiddleware(req,res,next){
    const age1 = req.query.age1;
    if( age1 > 14 ){
        next();
    }
    else{
        res.json({
            msg:"Go get bigger motherfucker"
        })
    }
}

//also use
//app.use(usingMiddleware);

app.get("/ride2", usingMiddleware,function(req,res){
    res.json({
        msg:"Jaa ghum apni 2nd ride"
    })
})

app.get("/ride1", usingMiddleware, function(req,res){
    res.json({
        msg:" Jaa ghum apni 1st ride"
    })
})

app.listen(3000, () =>{
    console.log('server is running on http://localhost:3000');
})

/*
Notes:
- Suppose tum ek mele mein gaye udhr tumko kisi jhule mein ride krna toh phle tum ticket loge phr tumhra checking hoga phir phr line mein jaoge phr tumhra bari ayega ride pe jane ka 
- So middleware is same like that only...jo basically kind of checking jaisa kam karta hai.
- app.use(isOldEnoughMiddleware) - yeh line ka order bhot jruri middleware function ke niche add krnge tabhi baki sabhi get ke under kam krega ...warna yeh kisi get ke niche hoga toh is code ke upar wle get pe ye kam nahi karega.
- hmlog is function ke bich bhi middleware function ko call kr skte...bass us middleware function ke name ko get ke andar add krna hoga. Example - app.get("/ride2"), isOldEnoughMiddleware, function(req, res){}
*/