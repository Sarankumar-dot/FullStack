const fs = require("fs");

fs.mkdir("./Practice", (err) => {
  if (err) {
    console.log(err.message);
  } else console.log("folder created");
});

// deleting the folder

// setTimeout(() => {
//     if (fs.existsSync("./Practice")) {
//       fs.rmdir("./Practice", (err) => {
//         if (err) {
//           console.log(err.message);
//         } else console.log("folder deleted");
//       });
//     }
// },4000)

fs.writeFile("./Practice/file.txt", "hi iam sarankumar", (err) => {
  if (err) {
    console.log(err.message);
  } else console.log("file created written successfully");
});

if (fs.existsSync("./Practice/file.txt")) {
  fs.readFile("./Practice/file.txt", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(data.toString());
    }
  });
}
