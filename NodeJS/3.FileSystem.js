// FILE SYSTEM

const fs = require("fs");

// creating a folder

if (!fs.existsSync("./data")) {
  fs.mkdir("./data", (err) => {
    if (err) {
      console.log(err.message);
      console.log("file not created");
    } else console.log("folder created");
  });

  console.log("this prints first because mkdir is an asynchronous function");
} else {
  console.log("not created");
}

// creating a file

fs.writeFile('./data/file.txt',"hi bro iam Sarankumar K",((err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("file created and written");
    }
}));

// reading a file

fs.readFile('./data/file.txt',((err,data) =>{
    if(err) console.log(err.message);
    else console.log(data.toString());
}))

// deleting a file

// if(fs.existsSync('./data/file.txt')){
//     fs.unlink('./data/file.txt',((err) =>{
//         if(err) console.log(err.message);
//         else console.log('file deleted');
//     }))
// }

// deleting a folder

// if(fs.existsSync('./data')){
//     fs.rmdir('./data',((err)=>{

//         if(err)
//             console.log(err.message)
//         else
//             console.log("folder removed");
//     }))
// }





