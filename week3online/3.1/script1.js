const divEl = document.createElement("div");
console.log(divEl);//here after creating a new 'div' we can not see it in console bcoz it is just created means stored in variable called 'divEl'
//which eventually means that it is stored in variable but not created inside 'DOM'

divEl.innerHTML = "bhodiske";//here we putting content inside our child node we created 
const parentEl = document.querySelector("body");//tehn after selecting parent node , we are appending means putting our child node inside parent node( " DOM ")
parentEl.appendChild(divEl);