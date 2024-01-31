/* 
The below code demonstrate create web server using node and http module
Created on 31 Jan 2024 By: Madhu Kumar K S
*/

const http = require('http');

// Creating a server
const server = http.createServer((req,res)=>{
    res.end("Hello From Node Server");
    console.log("New Reqeust receives");
});

// Start the Server
server.listen(8000, '127.0.0.1',()=>{
    console.log("Server listening at 3000 port")
});