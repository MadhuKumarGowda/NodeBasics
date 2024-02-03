/* 
The below code demonstrate create web server with emit and handle custom events
by using inheritance and module export
Created on 03 Feb 2024 By: Madhu Kumar K S
*/

const http = require('http');
const events = require('events');
const User = require('./Modules/user') // Importing user class to use as Event emitter

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

// Creating emitter variable of User type
let myuser = new User();

// Creating a custom event to display current logged in User ID and name 
myuser.on("newUserLoggedin", (id, name)=>{
    console.log(`New user logged in with ID ${id} and Name ${name}`);
})

// Emitting custom event called user details
myuser.emit('newUserLoggedin', 1, 'MadhuKumar')

