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