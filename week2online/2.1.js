// ASYNC JS(video title)

//1 topic: normal functions in JS

//find sum of two numbers

function sum(a,b){
    let sumofnum = a + b;
    return sumofnum;
}
let answer = sum(5,6);

console.log("Topic:normal functions in JS => " + answer);


//Find sum from 1 to a numbers

function summation(n){
    let sumo = 0;
    for( let i = 1 ; i <= n ; i++ ){
        sumo += i;
    }
    return sumo;
}//the another way for sum is return n * (n-1)

let ans = summation(5);
console.log("Topic:Find sum from 1 to a numbers in JS => " , ans);

// whatever we are learning is synchronous JS, => which means it is executed line by line in the order it's  written. Each operation waits for the previous one to complete before it moves on to the nnext one 


//main part for Async JS

//1 topic => I/O heavy operations

// I/O HEAVY operations => refers to tasks in a computer program that involves a lot of data transfer bw the program and external systems or devices.
//these operations usually require waiting for data to be read from or written to source like disks , networks,databases ,or other external devices , which can be time consuming compared to in-memory computations    

//examples
//1. reading a file
//suppose we have a ,var a = readfile(a.txt) which wants to read a file name"a.txt" which store smthng like i.e.("hi there") , basically it can happen that we have to wait for it or Os throws error bcoz the file doesnot exists and we have to wait for it to execute 

//2.starting a clock
// var a = wait(1) // thread will be stuck over here for a second before printing "parth"
//console.log("Parth");

//3.HTTP requests
//HTTP requests = your code sending or receiving data over the internet using the HTTP protocol.
//This is I/O-heavy because it waits for a server to respond.


//now we are writing code to perform I/O heavy operations
//fs is a external library 

const fs = require("fs");// fs here is  library which we are using, basically a module which others have written and we are using
//require is a syntax that is used when we require smthng or means library

//synchronously( one by one )
const contents = fs.readFileSync("a.txt","utf-8");//readfilesync is a function which means read the file synchronously , 'a.txt' is file path and 'utf-8' is encoding 

console.log(contents);

//asynchronously( start all together and waiting for them to finish )
const contents1 = fs.readFile("b.txt","utf-8");

console.log(contents1);
//here js will execute each line one by one and if just suppose 'readfilesync' takes 10 sec also to complete its work reading the file'a.txt' then also we must wait , and here our performance degrades 



//2 Topic is => FUNCTIONAL ARGUMENTS => which means passing a function to another function as an argument 

//WRITE a prgram to build a calculator that adds , subtracts , multiplies , divides two ARGUMENTS
//APPROACH 1;

function sum(a,b){
    return a + b;
}
function multiply(a,b){
    return a * b;
}
function subtract(a,b){
    return a - b;
}
function divide(a,b){
    return a / b;
}
 //function doOperation(a, b, op){
   // return op(a,b);
// }
console.log(sum(1,2));


//APPROACH 2;
function sum(a,b){
    return a + b;
}
function multiply(a,b){
    return a * b;
}
function subtract(a,b){
    return a - b;
}
function divide(a,b){
    return a / b;
}
function doOperation(a, b, op){// op here is an argument which is taking another function 
    return op(a,b);
}

console.log(doOperation(1, 2, sum)); // here if in place of sum if we had used sum(1,3) then it will return sum of two no. which will not be valid for return 3(1,3)



//correct way to of using 'fs' module to read a file is hereby we will se

const fs = require("fs");

function print(err,data){
    if(err){
        console.log("File not found !"); // error will come when file is busy, or does not exist etc.
    }
    else console.log(data);
}

fs.readFile("c.txt", "utf-8", print); // asynchronously
//both are running parallel and whtever finishes executes
fs.readFile("d.txt", "utf-8", print); // asynchronously
// fs.readfile is taking'callback' as a input which is 'print' which simply  means calling back another function 
console.log("done!"); 

//here the reason to use readfile is it will read the file and whenever it will complete its willl call function 'print', so here its not waiting for the first content10 to complete and then contents11 will run( synchronously way ) istead both will start simultaneously and whenever they will finish they must call the function


// let us another asynchronous function

console.log("hi");

function timeout(){
    console.log("Done");
}

setTimeout(timeout , 5000); // another asynchronous function which will call the 'timeout' function after 5000 ms and the format of executing starts from the first line all of that gt defined and 'setTimeout' gets execute after 5000 ms

console.log("welcome to luope !");


// 3 Topic is => How JS architecture executes Async. code 
//which means how Js 'delegates' the async code , 'delegates' means how it is making sure that after assigning the task it well get done and executes it on its own mean it is basically I/O bound heavy task
// But if we have used for loop so it totally depends on cpu capacity and run on based onn cpu by taking its time 

//here you need to go to loupe(where i can visualize how the js architecture works) on browser

function timeout(){
    console.log("Click the button !");
}

console.log("hi");// first it will define this

setTimeout(timeout,10000);// this timeout function is rnning on its own in background and gets pushed in queue by web apis 

console.log("welcome to loupe"); // then on second no. this

let c= 0;
for( let i = 0 ; i < 12 ; i++ ){ // then it will get to execute this whtever time it takes bcoz it is cpu intensive task and thread is busy over here
    c += 1;
}

console.log("Experiments got done !");
//whenever the loop finishes the timeout function gets executed