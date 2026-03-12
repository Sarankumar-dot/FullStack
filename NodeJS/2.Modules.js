
const {names,age} = require("./1.Modules")

console.log(names , age);

const os = require('os');
console.log(os.homedir()); // returns the home directory
console.log(os.freemem()); // return free mem available
console.log(os.version()); // returns os version 
console.log(os.totalmem())