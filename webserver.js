/* 
The below code demonstrate create web server using node and http module
Created on 31 Jan 2024 By: Madhu Kumar K S
*/

const http = require("http");
const fs = require("fs");

// Creating a server
const server = http.createServer((req, res) => {
  res.end("Hello From Node Server");
  const log = `${Date.now()}: new request has received\n`;
  fs.appendFile("./Files/log.txt", log, (err, data) => {
    console.log("New Request receives");
  });
});

// Start the Server
server.listen(8000, "127.0.0.1", () => {
  console.log("Server listening at 8000 port");
});
