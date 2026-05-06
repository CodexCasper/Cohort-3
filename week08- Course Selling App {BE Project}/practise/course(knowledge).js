
/*one more endpoint whee user will purchase the course , here this is the another way to place our route handlers
so that index.js does feel structured
*/
function userCourseRoutes(app){
    app.post('/course/purchase' , function(req,res){
        res.json({
            message: "course purchase endpoint"
        })
    })

    app.get('/preview' , function(req,res){
        res.json({
            message: "preview endpoint"
        })
    })
}

module.exports = {
    userCourseRoutes: userCourseRoutes
}