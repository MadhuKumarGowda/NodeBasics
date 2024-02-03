/* 
The below code demonstrate create web server with Event driven architecture
Created on 03 Feb 2024 By: Madhu Kumar K S
*/

const http = require('http');

const server = http.createServer();

// Creating port to listen the request
server.listen(8000, '127.0.0.1',(req,res)=>{
  console.log("Server is listening at 8000");
})

// on is event emitter
server.on('request',(req,res)=>{
     res.end("Hello from Server Event Driven : Yukti");
});