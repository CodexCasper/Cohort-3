//Assignments #1 -> using "CLI" we are reading a file and printing no of words from that file, "CLI" Stands for command line interface

const file = require("fs");
// also we can write const { program } = require('commander');

 const { Command } = require('commander')
 const program = new Command();

program 
    .name('Counter')
    .description('counting the no of files in file')
    .version('0.8.0')

program.command('counter')
    .description('counting the no of files in file')
    .argument('<file>','<file to count>')
    .action((file) => {
        fs.readFile(file,"utf-8", (err,data) => {
            if(err){
                console.log(err);
            }
            else{
                const lines = data.split('\n').length;//or we can simply use for loop here 
                console.log(`there are ${lines} lines in ${file}`);
            }
        });
    });

    program.parse();

//reason to use CLI is we can use multiple commands(here it is 'count') and call them terminal
// in previous module call 'fs' we can find how many words in file

// Note:
// To execute yeh command we have type "node THIS_FILE_NAME COMMAND_NAME NAME_OF_THE_OTHER_FILE_JISPE_COMMAND_OPERATE_KREGA" ...EX - 'node injex.js count a.txt'