const promise = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        reject("wrong link provided");
        return;
      }

      return response.json();
    })
    .then((data) => resolve(data))
    .catch(() => reject("Network error"));
});

promise
  .then((data) => console.log(data.title))
  .catch((err) => console.log(err));


const obj = {
    name : "saran",
    age : 21
}

const {name , age} = obj;
console.log(name , age);

const newOb = {...obj , sex : "male"};
console.log(newOb);


console.log(obj.name?.firstname);