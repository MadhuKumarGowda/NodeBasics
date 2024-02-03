/* 
The below code demonstrate streams data in Node
With Streams, we can process data piece by piece instead of reading 
or writing the whole data at once
Created on 03 Feb 2024 By: Madhu Kumar K S

Advantage

Streaming makes the data processing more efficient in terms of memory
because there is no need to keep all the data in the memory

4 types of Streams
Note: Streams of instance of Event Emitter
1. Readable : The readable streams are the one from where we can read or consume data chunk by chunk
              Example: Reqeust and Read file stream
              Important readable stream events are data & end
              Important readable stream methods are read & pipe 
2. Writable : The Writable streams are the one from where we can write data chunk by chunk. its opposite to readable
              HTTP Response IS BEST EXAMPLE 
              Example: Response and Write file stream
              Important writable stream events are drain & finish
              Important writable stream methods are write & end 
3. Duplex  : Duplex stream is simply a stream that is both readable and writable at the same time.
             Example : Web Sockets
4. Transform : Transfofrm streams are duplex streams which can also modify or transform data as its rad or written
             Example: Zlib module of  node [ Compressed ]
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.listen(8000, '127.0.0.1',()=>{
    console.log('Server is listineing at port 8000');
})

server.on('request',(req,res)=>{
    // Creating readable stream
    let rs = fs.createReadStream('./Files/largeFile.txt');

    // emitting data event to read the data chunk by chunk
    // and write into res object
    rs.on('data',(chunk)=>{
    // we can't use res.end() as its end the writing operation as soon as it receive first set of Chunk data
      res.write(chunk);
    });

    // Emitting end event when there read operation completed
    // or there is nothing to read
    rs.on('end',()=>{
        res.end("written operation completed"); // this will be help to end the response once all the data read from streams
    })

    // emitting error if there is any error 
    rs.on('error',(error)=>{
        res.end(`error occur while reading the file ${error.message}`);
    })   
})