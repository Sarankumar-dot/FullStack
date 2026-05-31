// symbol in js is introduce in es6
// it is a Primitive datatype which is used to create unique identifiers

let userId = Symbol("id");
let u = Symbol("id");

console.log(userId == u); // false because both are unique

// we can use symbol as a key in object to create unique property
// this is useful when we want to avoid property name collisions in objects
// for example when we are working with third party libraries
// or when we are working in large codebases where multiple developers are working on the same object/
// to avoid overwriting each other's properties we can use symbol as a key

let user1 = {
  name: "saran",
  [userId]: 47,
};

let user2 = {
  name: "sivan",
  [userId]: 1,
};
// here we have created sivan with userid 1 but this will not overwrite the userid 47 of saran it creates a new unique variable

console.log(user1[userId]);
console.log(user2[userId]);
