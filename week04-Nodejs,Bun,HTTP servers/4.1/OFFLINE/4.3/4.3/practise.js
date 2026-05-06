const express = require("express")

const app = express();


const user = [{
    Name: "Parth Bindal",
    KIDNEY: [{
        HEALTHY: false,
        HEALTHY: false
    }]
}];

app.use(express.json());

app.get('/', function (req,res){
    const parthkidney = user[0].KIDNEY;
    const noofkidney = parthkidney.length;

    let noofhealthykidney = 0;
    for(let i = 0 ; i<parthkidney.length ; i++){
        if(parthkidney[i].HEALTHY) {
            noofhealthykidney += 1;
        }
    }
    const noofunhealthykidney = noofkidney - noofhealthykidney;
    
    res.json({
        noofkidney,
        noofhealthykidney,
        noofunhealthykidney
    })
})

app.post('/', function(req,res){
    const ishealthy = req.query.isHealthy;

    user[0].KIDNEY.push({
        HEALTHY: ishealthy
    })

    res.json({
        mssg:"done"
    })
})

app.put('/', function(req,res){
    for(let i = 0 ; i<user[0].KIDNEY.length ; i++){
        user[0].KIDNEY[i].length = true;
    }

    res.json({
        mssg:"done"
    })
})

app.delete('/', function(req,res){
    if(isthereatleastoneunhealthykidney()){
        const newarr = [];
        for(let i = 0 ; i<user[0].KIDNEY.length ; i++){
            if(user[0].KIDNEY[i].HEALTHY){
                newarr.push({
                    HEALTHY: true
                })
            }
        }
        user[0].KIDNEY = newarr;
        res.json({
            mssg:"done"
        })
    }
    else res.status(411).json({
        mssg: "you have no bad kidneys"
    })
})

function isthereatleastoneunhealthykidney(){
    let kidney = false;
    for(let i = 0 ; i < user[0].KIDNEY.length ; i++){
        if(!user[0].KIDNEY[i].HEALTHY){ // eke bhi healthy kidney nahi hai 
            kidney = true;
        }
    }
    return kidney;
}

app.listen(3000, () => {
    console.log('the server is oon website http://localhost:3000');
})