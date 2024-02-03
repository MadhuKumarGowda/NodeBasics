/* 
The below code demonstrate create web server with emit and hamdle custom events
Created on 03 Feb 2024 By: Madhu Kumar K S
*/

const http = require('http');
const events = require('events');

// Creating a server
const server = http.createServer();

// Creating port to listen the request
server.listen(8000,'127.0.0.1',(req,res)=>{
    console.log("Server Listening");
})

// on is event emitter
server.on('request',(req,res)=>{
    res.end("Hello from Custom Event driven Page");
})

// Event Emitter with no parameters
// Creating new emitter varibale to handle emit 
let myEmitter = new events.EventEmitter();
// creating a custom event
myEmitter.on("loadingPage",()=>{
    console.log("Loading Page event called");
})
// Emitting custom event called loading page without any parameters
myEmitter.emit('loadingPage');

// Event Emitter with parameters
// Creating new emitter variable 
let userEmitter = new events.EventEmitter();
// Creating a custom event to add user
userEmitter.on('usercreated',(id,name)=>{
    console.log(`User Created with ID ${id} and Name ${name}`);
})

// Emitting custom event called user created with parmeters
userEmitter.emit('usercreated', 10,'MadhuKumar');