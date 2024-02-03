/* 
The below code demonstrate to resolve  Back Pressure problem by usning pipe method 
Created on 03 Feb 2024 By: Madhu Kumar K S

*/

const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.listen(8000, '127.0.0.1',()=>{
    console.log('Server is listineing at port 8000');
})

// server.on('request',(req,res)=>{
//     // Creating readable stream
//     let rs = fs.createReadStream('./Files/largeFile.txt');

//     // emitting data event to read the data chunk by chunk
//     // and write into res object
//     rs.on('data',(chunk)=>{
//     // we can't use res.end() as its end the writing operation as soon as it receive first set of Chunk data
//       res.write(chunk);
//     });

//     // Emitting end event when there read operation completed
//     // or there is nothing to read
//     rs.on('end',()=>{
//         res.end("written operation completed"); // this will be help to end the response once all the data read from streams
//     })

//     // emitting error if there is any error 
//     rs.on('error',(error)=>{
//         res.end(`error occur while reading the file ${error.message}`);
//     })   

   
//})

 /*
    Above implementation has a problem i.e if readable speed is 4MBps adn writable speed is 3MBps
    readble is much faster than writable and writable is slow, this leads to overwhelm the writable 
    stream which can not handle all incoming data so fast.
    this problem is called as Back Pressure
    Back pressure occurs when the response cannot send the data nearly as fast as it receiving from the source file
    to solve the Back pressure problem we can use PIPE method of writable streams
*/

// PIPE Method implementation
// PIPE method can only be used for readable streams 
/* PIPE method provide 2 advantgeous
       1. Fix the Back Pressures problem
       2. Complete readable operatio code can be written in just 2 lines
*/
server.on('request',(req,res)=>{
    let rs = fs.createReadStream('./Files/largeFile.txt');
    rs.pipe(res);
})