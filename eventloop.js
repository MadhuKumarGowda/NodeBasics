/*
Below code demonstrate event loop in practical

Toplevel functions executing first
setTimeout and setImmediate are executing as soon as top level code executed

Event Loop has 4 phases 
1. Timer
2. IO Task & Polling
3. SetTime immediate
4. Closed callback

Created on 06th Feb 2024 by Madhu Kumar  K S
*/

const fs = require('fs');
// Top level functions
console.log("Program has started...");

// stored in 1st Phase
setTimeout(() => {
    console.log("executing inside timeout")
}, 1);

// Stored in 3rd Phase
setImmediate(()=>{
    console.log("set immediate callback executing");
})

// Stored in 2nd Phase
 fs.readFile('./Files/input.txt',"utf-8",()=>{
    console.log("File being reading..."); // this line executed 1st

    setTimeout(() => {
        console.log("executing inside 2nd Phase") // this line is executed after setImmediate
    }, 0);

    setImmediate(()=>{
        console.log("set immediate callback executing in 2nd Phase"); // this line will execute after file read operation
    })

    // important callbacks which will extecute after file reading method
    process.nextTick(()=>{
        console.log("Process next tick executed");
    })
});
 
// Top level functions
console.log("Program has Completed...");

