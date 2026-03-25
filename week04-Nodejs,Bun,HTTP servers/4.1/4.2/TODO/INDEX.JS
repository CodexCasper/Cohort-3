// TOPIC : Backend of a TO-Do ( HTTP )

//to initialize a node js project locally we use command " npm init -y "

// we did npm install express  , as it is a external library 

/*
const fs = require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
console.log(data);
})
*/

const express = require("express");
const app = express() // create a fresh variable " app " 

//route handlers
app.get('/', (req, res) => { //here "  '/' is a route handler "
  res.send('Hello World')//it is handling just upto /
})

app.get('/new', (req,res) => { // if we will visit website below we can decide for what  route what we want to display 
    res.send('jbahbfhbfd')
})
// express library give us access to 'req' , 'res' means whenever the route handler get execeuted '/new or /' then express library gets this request(req) and gives response(res)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')// '3000' is our port here 
}) 

//here localhost is a another domain name with ip address( 127.0.0.1 ) of our own machine , we can send a request to my own machine using 'postman' and select a request 'GET' here 