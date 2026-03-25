// how the frontend is getting data from the api or from the backend 
// we can use fetch in frontend to get that

// CORS => cross origin resource sharing 
// Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that controls how resources on a web server can be requested from another domain. It's a crucial mechanism for managing cross-origin requests and ensuring secure interactions between different origins on the web.
// by default cors is blocked in node.js 

// creating an HTTP server 
const express = require("express")
const cors = require("cors")// to use cors 

const app = express();

app.use(express.json());
app.use(cors());

// we can host frontend and backend on the same domain but usually we dont 

// app.get("/", (req,res){
//res.sendfile(__dirname + "/public/frontend.html");
// })

app.post("/sum", function(req,res){
    console.log(req.name)
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)

    res.json({
        "sum": a + b
    })
});

app.listen(3000);