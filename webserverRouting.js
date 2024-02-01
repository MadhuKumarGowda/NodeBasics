/* 
The below code demonstrate create web server with Routing using node and http module
Created on 01 Feb 2024 By: Madhu Kumar K S
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // Reading URL reqeust and decide the action based on reqeust
    let path = req.url;
    console.log("New Reqeust receives");

    if(path === "/" || path.toLocaleLowerCase() === "/home"){
        res.writeHead(200); // this line is to set the response status 
        res.end("You are in Home page");
    }else if(path.toLocaleLowerCase() === "/about"){
        res.writeHead(200);
        res.end("You are in About Page");
    }else if(path.toLocaleLowerCase()==="/products"){
           fs.readFile("./Files/products.json", "utf-8", (error, data)=>{
            JSON.parse(data);
            res.end(data);
           });
    }
    else{
        res.writeHead(404);
        res.end("Page not Found");
    }
    
    
})

server.listen(8000, '127.0.0.1',()=>{
    console.log("Server listening at 8000 port")
})