let str = "AHello World!";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0));
console.log(str.charCodeAt(0)); // returns the ascii value of the character
console.log(str.codePointAt(0)); // same ascii value

console.log(str.substring(0,6));


let s = "Learn Javascript , Javascript is fun";

console.log(s.indexOf("Javascript")); // returns the index value , checks from the start of the string
console.log(s.lastIndexOf("Javascript")); // returns the last index available on the string, checks from the reverse of the string


console.log(s.replace("Javascript","Python")); // replaces the Javascript to Python
console.log(s.replaceAll("Javascript","Python")); // replace every Javascript found on the string

let k = "Learn Javascript , Javascript, is fun";

k = k.replace(/,/g, "");
let arr = k.split(" ");
console.log(arr);

let text = "    saran     ";
text = text.trim();
console.log(text);
