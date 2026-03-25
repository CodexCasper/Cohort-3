//  TOPIC: PROMISES

//1.topic is 'CLASSES' 
// first of all let us discuss the basics 
// 'PRIMITIVE TYPES' => 1.number 2.string 3.boolean 4.null 5.bigInt 6.undefined 7.symbol
//'COMPLEX TYPES' => 1.objects(which consists of key value pairs) 2. arrays(uses collective information)

//"CLasses" => are basically a way to define blueprint to create objects , (these objects are different from the objects(key-value pairs))


//this is the native way to do things right here( not clear way to write syntax )
const rect1 = {
    width:2 ,// just a function where we defined some parameters
    height:3 ,
    color: "red"
}

function area(rect){
    return rect.width * rect.height;
}

const ans = area(rect1);
console.log(ans);


//below is right way like syntax wise(cleaner way)

class rectangle{// A class is a blueprint or a structure where we define properties(data) and methods(functions) related to an object
    constructor(width,height,color){
        this.width = width; // "this" assign or attach the values to this parameters
        this.height = height; // width, height,color are the parameters 
        this.color = color;
        //(constructor) is a special method which automatically runs when we create a instance with "new"
        // calling new rectangle(20,40,"blue") is creating an object of key value pair
    }

    area(){ // this is an instance method
        const area = this.width * this.height;
        return area;
        //or we can run directly return this.width * this.height 
    }
    paint(){ // another instance method
        //console.log(`The color is ${this.color}`);
        console.log("color is" + this.color);
    }
}
//new creates a new of instancee of rectangle
const rect = new rectangle(20,40,"blue"); // 'rect' is a object with thhose properties and methods
const area1 = rect.area();
const paint1 = rect.paint();
console.log(area1);



// class defines what an object looks like 
// but 'instance' is an object we actually use  


// apart from the classes that we have created , JS gives us some predefined classes that we can use

//1. Date
const now = new Date();
console.log(now.getDay());
console.log(now.getTime());
console.log(now.getMonth());
console.log(now.getFullYear());


//2. Map
const map = new Map();
map.set('Name', 'parth');
map.set('age', 21);
console.log(map.get('name'));


// PROMISES
// A 'promise' in JS is an object that represents eventual completion(or failure) of an asynchronous operation and its resulting value


//using callback

function main(){

}
setTimeout(main,7000000000);

//we can say that promises are just a syntactically more practical way to write instead of callbacks
//promises
function setTimeoutPromisfied(ms){
    return new promise(resolve => setTimeout(resolve,ms));
    //another way we can say it is returning object of promise class 

    //another way let p = new promise(resolve => setTimeout(resolve,ms))
    //return p
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromsified(3000).then(callback);// then represents that when promise eventually get completed then it will call this function


// another example
function waitfor3S(myvariable){
    setTimeout(myvariable,5000);
}

function setTimeoutPromisified(){
    return new promise(waitfor3S); // what promise classs do here is it takes one function over here which is 'waitfor3S' and whatever the first argumment of this function 'myvariable' whenever this will be called it will call whatever is passed over 'this'
}

function main(){
    console.log("Main is called");
}

setTimeoutPromsified().then(main); // main is called after 3 seconds