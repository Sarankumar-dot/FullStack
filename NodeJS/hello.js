console.log("hello broop");

const arr = (name) => {
  console.log(`This is my name 
        broo ${name}`);
};

arr("saran");

console.log(global);

const inter = setInterval(() => {
  console.log("tnah than");
}, 2000);

setTimeout(() => clearInterval(inter), 4000);

console.log(__dirname); // directory name
console.log(__filename); // file name
