// TOPIC : EXPRESS AND HTTP SERVER 

// Suppose we have a service(or smthng) that we want to expose to the world !
// how we can ?
// using  HTTP SERVER ( HYPERTEXT MAKRUP PROTOCOL ) => a program that listens to http requests and sends back http responses 
// HOW DO WE CREATE ONE ? => EXPRESS 

const express = require("express") // what is express here ? => bsically a library which is name 'express' which let us create http servers
// bcoz we won't write every single line of code to create every single thing by ourself 

function pp(n){
    let sum = 0;
    for( let i = 0 ; i <= n ; i++ ){
        sum += i;
    }
    return sum;
}

const app = express(); // "app" here is an instance (actual object) which we use , think of it like a room where we perform operations

app.get("/" , function(req,res){ // this is just one functionality of smthng , can be many
    const n = req.query.n;// in express this is the way we can take input , to give input => localhost:3000/?n=3
    const sum = pp(n);
    res.send(" Hi your ans is " + sum);// this is the response we are sending to request 
})
// "/" and (req,res) are two parameters that we need to learn by ourself which express demands 

app.listen(3000 , () => {
    console.log('server is running on http://localhost:3000') // this is the address , or we can say ' PORT ' to reach at a specific location
});


// summarize is we have HTTP SERVER which is used over internet to expose some funcitonality 
// the address '3000' is single thhreded means even if 20 ar waiting it can respond to only one at a time 

