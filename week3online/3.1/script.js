/*
let ctr = 0;
function callback(){
    console.log(ctr);
    ctr += 1;
}

callback();
callback();
callback();
callback();
callback();
//this way ctr starts with 0 and increments by 1 evrrytime and get printed , here we have to call our function 'callback' mutiple times until we need

/// here we will use setInterval , which will our function evrytime in interval time we had given\

setInterval(callback,1000);

*/

let ctr = 0;

function callback(){
    const example = document.querySelectorAll("h4")[1].innerHTML = ctr;
    ctr += 1;
}

setInterval(callback,1000);