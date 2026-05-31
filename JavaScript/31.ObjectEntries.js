let obj = {
  name: "saran",
  age: 21,
  gender: "male",
};

// suppose we need to change the entire object to an array with the exact position of keys and values then we can uses entries method
// entries method - converts the object into array of arrays with key and value pairs
// each array will contain 2 elements - first element will be key and second element will be value
// syntax: Object.entries(objectName)
// returns an array of arrays
// this will return the keys in sorted order

let res = Object.entries(obj);
console.log(res);

// the output will be arrays of arrays
// [ [ 'name', 'saran' ], [ 'age', 21 ], [ 'gender', 'male' ] ]

// this will return the keys in sorted order
let obj2 = {
  bname: "saran",
  aname: "kumar",
  cname: "karthi",
};

console.log(Object.entries(obj2));
// output will be
// [ [ 'aname', 'kumar' ],
//   [ 'bname', 'saran' ],
//   [ 'cname', 'karthi' ] ] // keys are in sorted order [lexographically sorted]