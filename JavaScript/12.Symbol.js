// symbol in js is introduce in es6
// it is a Primitive datatype which is used to create unique identifiers

let userId = Symbol("id");
let u = Symbol("id");

console.log(userId == u);



let user1 = {
    name:"saran",
    [userId]: 47
};

let user2 = {
    name:"sivan",
    [userId]:1
};
// here we have created sivan with userid 1 but this will not overwrite the userid 47 of saran it creates a new unique variable

console.log(user1[userId]);
console.log(user2[userId]);