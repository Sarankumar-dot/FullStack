let str = "AHello World!";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0));
console.log(str.charCodeAt(0)); // returns the ascii value of the character
console.log(str.codePointAt(0)); // same ascii value

console.log(str.substring(0,6));
console.log(str.slice(0,6));// same as substring but slice can take negative indexing also but substring can't
console.log(str.slice(-6,-1)); // negative indexing
console.log(str.includes("Hello")); // returns true or false


let s = "Learn Javascript , Javascript is fun";

console.log(s.indexOf("Javascript")); // returns the index value , checks from the start of the string
console.log(s.lastIndexOf("Javascript")); // returns the last index available on the string, checks from the reverse of the string


console.log(s.replace("Javascript","Python")); // replaces the Javascript to Python
console.log(s.replaceAll("Javascript","Python")); // replace every Javascript found on the string

let k = "Learn Javascript , Javascript, is fun";

k = k.replace(/,/g, "");// using regular expressions to replace all commas
console.log(k);
let arr = k.split(" ");
console.log(arr);

let text = "    saran     ";
text = text.trim();
console.log(text);
console.log(text.trimStart());// only trims the starting spaces
console.log(text.trimEnd());// only trims the end spaces
console.log(text.concat(" is a good boy"));// concatenation
console.log(text.repeat(3));// repeats the string 3 times
console.log(`Hello, ${text}`);// template literals
console.log(String.fromCharCode(65)); // converts ascii value to character
console.log(String.fromCodePoint(128512)); // converts unicode value to character

console.log(`The value of 2 + 2 is ${2 + 2}`); // expression inside template literals
console.log(`The value of 2 + 2 is ${(() => 2 + 2)()}`); // function inside template literals
console.log(`Multiline string:
Line 1
Line 2
Line 3`); // multiline string using template literals
console.log(`Using \`backticks\` inside template literals`); // using backticks inside template literals
console.log("Using \\\"double quotes\\\" and \\\'single quotes\\\' inside normal string"); // using quotes inside normal strings
console.log("This is line 1\nThis is line 2\nThis is line 3"); // multiline string using escape sequences
console.log("saran");

