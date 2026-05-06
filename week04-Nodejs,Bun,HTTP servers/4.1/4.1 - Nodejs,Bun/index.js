console.log("Let us start node.js");
// NPM => NODE PACKAGE MANAGER 
// It is a package manager for js , primirarly used for managing libraries and dependencies in Node.js projects. NPM allows delevopers to easily install,update , and manage packages of reusable codew
//two sections are mainly imp in package.json 1.script nd 2.description 

// One of the uses of npm is => npm install chalk => which means to install external dependicies which is being made by someone we are just installing and using it 


//installing "chalk" external dependencies by doing " npm install chalk " will install dependencies in package.json
//bcoz node modules packages are so big , even if we install "express" just bcoz express depends on various dependencies they also get installed

/* suppose if by any chance our node modules gets deleted than bcoz in past when we have installed those modules they evventually get into dependencies and whenever we will use npm install in terminals , it automatically download the  node modules which are aleady there in dependencies */

//we dont push node modules on github bcoz if anyone ever pull your code from github then again they just needed to runn command " npm install " 

// this is called semantic versioning format
/* now go to package.json file and read " dependencies " there we can see "chalk": "^5.6.2"  WHERE Format is  'MAJOR.MINOR.PATCH' 
MAJOR => major version changes indicate significant updates and breaking changes 
MINOR => Minor changes indicates the addition of new features or improvements in a backward-compatible manner 
PATCH => Patch version changes include backward-compatible bug fixes or minor improvements that address issues without adding new features or causing breaking changes */


/* now the sign '^' indicates that or assures that every time we delete node modules latest version(compatible with 5.6.2) get downloaded but not 6. smthng */

//if we will remove " ^ " then the exact version will get installed 


// package-lock.json , work is that it records thhe exact version of all the dependencies amd their dependencies that was installed at the time npm was run 
// by locking down these versions it ensures that whenever other install dependencies they get the exact same version and not causing any discrepancies 


//this code is needed to be run in file 'index.mjs'
//import chalk from 'chalk';                      // modern import syntax
//const pp = require("chalk");
//console.log(chalk.red.bold("Working"));



/* Node.js provides you some packages out of the box. Some common one include

1.FS - filesystem
2.path - path related functions
3.http servres - create http servers 

*/
// 'fs' package is used to read,write,update ,contents on thefilesystem



/*
const p = require("path");
console.log(__dirname);    // it is a global node.js variable that gives us absolute directory  path  of the current file 
console.log(p.join(__dirname,"index.js"));   //joining the current file with index.js

//second way of writing is
console.log(__dirname,"/index.js");

*/


/// this comes under internal packages 
const pp = require("path");// "pp" here is just a variable where we are storing it , also we can say pp is an object with methods like "join,resolve"
// 'path' is a built-in node js module used to deal with file and folder paths
console.log(pp.join(__dirname,"/../../index.js" + "/projects" + "/kuchbhi"));// here 'path.join' basically resolve the '..' accorrdingly by itself and '..' means it jumped two times
console.log(__dirname,"../../index.js" + "/projects" + "/kuchbhi");// this path is not joining just printing

//in external packages there is "EXPRESS,CHALK"








