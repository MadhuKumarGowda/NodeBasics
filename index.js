/* 
this program is to demonstrate to create interface to read and write the user input
Created on 31 Jan 2024 By: Madhu Kumar K S
*/


console.log("Hello From NodeJS");
console.log("This is first node for public giy hub");

// Creating an interface to read user input
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.question("Please enter your name: ", (name)=>{
    console.log("You Entered : "  + name);
    rl.close();
})

// Emit the event on Closing
rl.on("close", ()=>{
    console.log("Closing Interface")
    process.exit();
})