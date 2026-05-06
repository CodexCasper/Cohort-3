const jwt = require("jsonwebtoken");

const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req,res,next){
    const token = req.headers.token;
    const tokenverify = jt.verify(token, JWT_USER_PASSWORD);

    if(tokenverify){
        req.userId = tokenverify.id;
        next()
    }
    else{
        res.status(403).send({
            message: "Incorrect credenntials"
        })
    }
}

module.exports = {
    userMiddleware: userMiddleware
}