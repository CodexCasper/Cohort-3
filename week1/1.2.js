//syntax of javascript

//1topic -- variables

let firstname = "Parth"; // this is the variable that can be reaAssigned
const age = 21; // constant that can not be reassigned
var isStudent = true; // variable that can be reaasigned(old way of writing var)


//changing the var value
isStudent = " bhosdike";
isStudent = "madachod";
console.log(firstname);//here we are printing variable

//but if we change the variable to string, which will mean we want to print string
console.log("firstname");

console.log(age);

console.log(isStudent);

//var is used in 2015,16  and some limitations that is why do not use it ,
//let is very similiar to var only , where var is function scope  which implies that variable declared in var can be accessed only inside that function not outside it

//let us discuss (let,cons)
let isbhosdu = "bindal";
const umar = 20;
console.log("printint before changing")

//umar = "kumar";//this will crash the program 

console.log("printing affter changing")

//2nd topic-> DATATYPES

let number =42;
let string = "Parth bindal";
let isActive = false; // boolean

let numbers = [1,2,3,4,5];// array


//3rdtopic-> OPERATORS

let sum = 10 + 5;// arithmetic operator
let isTrue = ( true && false );// logical operator
let isEqual = (10 == 10);//comparison operator



//4topic. FUNCTIONS

function greet(name){
    return "Hello, " + name;
}
let message = greet("parth");
console.log("topic:function: " + message);


function sumi(a,b){
    let sumo = a + b;
    return sumo;
}

let answer = sumi(5,3);
console.log("topic:function: " + answer);


//5topic. IF ELSE

function canVote(age){
    if (age >= 18) {
        console.log("you are an adult");
    }
    else{
        console.log("you are minor")
    }
}
let ans = canVote("Topic:if-else: " + 15);


//6topic. loops condition

let users = ["parth", "Bindal", "Geeta", "anil", "Prateek"];
for(let i = 0 ; i < 5 ; i++){
    console.log("Topic:Loops," + users[i]);
}

//7topic: objects => which means it helps us aggregate data at one place
 
function user1(user){
    console.log("HI " + user.name + " your age is " + user.Age);//this is called string concatenation means joining multiple strings
}


let user = {
    name:"Parth bindal",
    Age:21,
    gender:"male"
}

user1(user);


//8topic : Arrays of objects

let arr = [ "Parth", 21,{
    name:"bindal",
    student:true,
    city:["thailand", "Malaysia", "Bali",{
        state:"United state of america",
        girl:"Russian"
    }]
}];

console.log(arr[2].city[3].girl)
