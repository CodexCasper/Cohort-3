// this is one of the alternative way of routing to so that index.js is srtuctured and whole code is structured , written 
//just for knnowledge , will use routing only 
function createUserRoutes (app){
    app.post('/user/signup' , function(req,res){
        res.json({
            message: "signup endpoint"
        })
    })

    app.post('/user/signin', function(req,res){
        res.json({
            message: "signin endpoint"
        })
    })
//endpoint for user when they wants to know what are the courses they purchsed on a course sellig website
    app.get('/course/purchases', function(req,res){
        res.json({
            message: "purchased course endpoint"
        })
    })
}

module.exports = {
    createUserRoutes: createUserRoutes
}