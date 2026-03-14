const fs = require("fs");
const { buffer } = require("stream/consumers");

const readStream = fs.createReadStream("./data/file.txt");

// readStream.on('data' , ((buffer) =>{
//     console.log("new buffer");
//     console.log(buffer.toString());
// }))


// writeStream

const writeStream = fs.createWriteStream("./data/Copyfile.txt");

// readStream.on("data", (buffer) => {
//   writeStream.write(buffer);
// });

// there is also another method to copy all text from one file to another
readStream.pipe(writeStream);
