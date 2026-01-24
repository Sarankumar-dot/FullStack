// freeze method - is used to freeze an object
// once an object is frozen we cannot add , delete or modify any properties in that object

let obj = {
    bname:"saran" , 
    aname:"kumar",
    cname:"karthi"
};

Object.freeze(obj);

obj.dname = "malik"; // dname cannot be added because the object is freezed
console.log(obj);

delete obj.bname; // we cannot also delete properties from it when it is freezed
console.log(obj);
