/* 
The below code demonstrate the Asynchronous executing file read and write operations
Created on 31 Jan 2024 By: Madhu Kumar K S
*/

const fs = require('fs')
fs.readFile("./Files/AsyncInput.txt", "utf-8",(error, data)=>{ 
    console.log(data);
    fs.readFile(`./Files/${data}.txt`,"utf-8", (error, inputdata)=>{
        console.log(inputdata);
        fs.readFile('./Files/appendFile.txt', 'utf-8', (error,appenddata)=>{
         console.log(appenddata);
         fs.writeFile('./Files/AsyncOutput.txt', `${inputdata}\n\n${appenddata}\n\nDate Created : ${new Date()} By Madhu Kumar K S`,()=>{
            console.log("File written succesful");
         })
        })
    })
})

console.log("Reading a file...");