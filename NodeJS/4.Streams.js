const fs = require('fs');
const { buffer } = require('stream/consumers');

const readStream = fs.createReadStream("./data/file.txt");

readStream.on('data' , ((buffer) =>{
    console.log("new buffer");
    console.log(buffer);
}))