/* 
The below code demonstrate inheriting ecvent emitters methods to user class
Created on 03 Feb 2024 By: Madhu Kumar K S
*/

const events = require('events');

// Extend to Event Emitters and calling super method to make Eventemitter methods 
// are on emit are available / enable for user class.
module.exports = class extends events.EventEmitter{
constructor(){
    super();
}
};