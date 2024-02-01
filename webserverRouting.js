/* 
The below code demonstrate create web server with Routing using node and http module
Created on 01 Feb 2024 By: Madhu Kumar K S
*/

const http = require('http');

const server = http.createServer((req,res)=>{
    // Reading URL reqeust and decide the action based on reqeust
    let path = req.url;
    console.log("New Reqeust receives");

    if(path === "/" || path.toLocaleLowerCase() === "/home"){
        res.end("You are in Home page");
    }else if(path.toLocaleLowerCase() === "/about"){
        res.end("You are in About Page");
    }else{
        res.end("Page not Found");
    }
    
    
})

server.listen(8000, '127.0.0.1',()=>{
    console.log("Server listening at 8000 port")
})