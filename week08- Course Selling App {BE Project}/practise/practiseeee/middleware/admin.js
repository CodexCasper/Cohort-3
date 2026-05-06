const jwt = require("jsonwebtoken");

const { JWT_ADMIN_PASSWORD } = require("../config")

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const tokenverify = jwt.verify(token, JWT_ADMIN_PASSWORD);
    
    if(tokenverify){
        req.adminId = tokenverify.id;
        next()
    }
    else{
        res.status(403).send({
            message: "Incorrect credentials"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}