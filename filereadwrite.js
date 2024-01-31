// this program is to demonstrate the read and write file operation synchronously

const fs = require('fs');

// this method has perfromance issue if file has more data.
let textin = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textin);

let outputTxt = `Text from input text : ${textin} + \n Date Created ${new Date()}  Madhu Kumar K S`; 
// If file is not preasent then node will create output file then write text to file.
fs.writeFileSync("./Files/output.txt", outputTxt);