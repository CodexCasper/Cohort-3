//installing the dependencies
const jwt = require("jsonwebtoken");

//importing the admin diff. jwt password from config file
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminmiddleware(req,res,next){
    const token  = req.headers.token;
    const tokenverify = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if(tokenverify){
        req.adminId = tokenverify.id;
        next();
    }
    else{
        res.status(403).send({
            message:"incorrect credentials"
        })
    }
}

module.exports = {
    adminmiddleware: adminmiddleware
}