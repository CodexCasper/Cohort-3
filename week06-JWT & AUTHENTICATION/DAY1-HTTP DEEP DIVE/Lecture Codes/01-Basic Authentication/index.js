/*- Initialise an empty Node.js project
- Create an index.js file, open the project in visual studio code
- Add express as a dependency
- Create two new POST routes, one for signing up and one for signing in
- Use express.json as a middleware to parse the post request body
- Create an in memory variable called users where you store the username , password and a token (we will come to where this token is created later.
- Complete the signup endpoint to store user information in the in memory variable
- Create a function called generateToken that generates a random string for you
- Finish the signin endpoint. It should generate a token for the user and put it in the in memory variable for that user
 */


const express = require("express");

const app = express();
/*
({
 username:"parth", password:"123455" , token: "hehfehfhdsfjhsdgbf"(token is randomly generated)
})
*/
app.use(express.json())// using express.json as a middleware to parse the post request body 

const users = [];// a global user array to store username,password,tokens 

// should return a random long string 
function generateToken(){
   let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
   let token = "";
   for( let i = 0 ; i < 32 ; i++ ){
      token += options[Math.floor(Math.random() * options.length)];
   }
   return token;
}

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message:"you have successfully signed up"
    })
    console.log(users);

})

app.post("/signin",function(req,res){

    const username = req.body.username;
    const password = req.body.password;


    // now we must check first if the username and password exist so that we can return token 
    const foundUser = users.find(function(u){ // this is the in memory variable for that user 
        if(u.username == username && u.password == password){
            return true;
        }
        else {
            return false;
        }
    })

/*
    //alternative way to check whether the user data exist or not 
    const founduser1 = null;
    for( let i= 0 ; i < users.length ; i++ ){
        if( users[i].username == username && users[i].password == password ){
            founduser1 = users[i];
        }
    }
*/

if( foundUser ){
    const token = generateToken();
    foundUser.token = token; // this step means we are storing token also along with username and password 

    res.json({
        message: token
    })
}
else {
    res.status(403).send({
        message:"Invalid username or password"
    })
}
console.log(users);
});

// creating an authenticated EP(Eendpoint)

app.get("/me",function(req,res){   //Created an authenticated EP which  returns the user their information only if they send their token
    const token = req.headers.token;  //Jo meta data mein hmlg kuch kuch cookies snd krte hai wahi header ke andar hoga woh token bhi jyega

    // Searches the users array for a user whose token matches the token from the request header. If a match found, that user object is stored in foundUser
    let foundUser = null;
    for( let i = 0 ; i < users.length ; i++ ){
        if(users[i].token == token){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
        else{
            res.status(401).send({
                message:"Unauthorized"
            })
        }
})

app.listen(3000,() =>{
    console.log("the server is running on http://localhost:3000");
})  

/*
Notes:
- Phle postman mein jayenge udhar localhost:3000/signup mein post req se do teen input denge username password ka body mein json object ke andar..
- Phir localhost:3000/signin mein jaynge aur post req krke uspe post req pe jo input diye gye username password jo diye hai usse usko snd req krenge toh ek token milega 
- phir localhost:3000/me mein jaynge aur then headers pe jayenge aur add krenge token ko aur jo token generate kiye hue hai usko copy paste kr denge headers mein token mein aur req send krenge jisse woh jis bhi username oassword ka token hai woh mko output mein return krega 
*/