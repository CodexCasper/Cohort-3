const jwt = require("jsonwebtoken")
const JWT_SECRET = "main-nahi-btaunga"

function auth(req,res,next){
    const token = req.headers.token;
    const decodedtoken = jwt.verify(token,JWT_SECRET)

    if(decodedtoken){
        req.userId = token.id;
        next();
    }
    else{
        res.status(403).json({
            message:"incorrect credentials !"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}