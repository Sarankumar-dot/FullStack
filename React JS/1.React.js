// React or React JS is a java script library , it is used to build a user interface efficiently and smoother.
// officially launched by facebook 2013.
// library is a toolbox contains multiple tools but framework is a tool in that tool box.
// React is a library , you can easily make changes in code(many tools available) but angular is framework (it is a single tool like a spanner)

//React is called a library because it mainly focuses on the UI layer of an application. Developers have the freedom to choose other tools (like routing, state management, etc.) as needed.
// On the other hand, Angular is a framework, which means it provides a complete built-in structure with many features already included.

// Simple Analogy:
// React is like a toolbox — you can pick and use the tools you need.
// Angular is like a complete machine/tool — everything is already fixed and included in one package.

// why react ?
// if we change any content in the DOM tree then it will always recreate it from scratch which causes the page to load and loss of performance
// so for avoiding this react is introduced , it contains a virtual DOM 

// React is used because updating the real DOM directly is slow and affects performance.

// In normal JavaScript:

// If a change happens in the UI (like text update, button click, etc.)
// The browser may need to update and repaint many parts of the DOM
// This can become inefficient for large applications

// ✅ React Solution: Virtual DOM working!!!

// react copies the original dom first.
// React introduces the Virtual DOM, which is a lightweight copy of the real DOM.
// How it helps:

// React makes changes in the Virtual DOM first
// It compares the old Virtual DOM with the new one (Diffing)
// React updates only the changed part in the real DOM (Reconciliation)
// So instead of reloading or updating the entire page, React updates only what is needed.

// We can directly write html , css , JavaScript in react which is Developer friendly

// SFA - single page application

// A Single Page Application (SPA) is a web application that loads only one HTML page initially.
// After the first load:
// The page does not reload completely
// Only the required content is updated dynamically
// The application feels faster and smoother
// React (and similar frameworks) achieve this by updating the UI using JavaScript

// A Single Page Application is a web app that loads a single page once and then dynamically updates content without full page reloads, providing a smooth user experience.
// Example:
// Gmail
// YouTube
// Instagram Web


// MFA - Multi page application
// conatains multiple pages once we visit another page it reloads again from start.

// How it works:
// Each time the user clicks a link or moves to another page,
// The browser sends a new request to the server,
// A completely new HTML page is loaded,
// The page reloads from scratch.

// compared to angular and vue react is faster


// IMPERATIVE programming

// In imperative programming, you tell the computer HOW to do something step by step.
// You control the flow manually.
// Example (JavaScript Imperative)
// const heading = document.createElement("h1");
// heading.textContent = "Hello World";
// document.getElementById("root").appendChild(heading);

// ✔ Here you are giving instructions:
// Create an element
// Add text
// Append it to DOM
// So it is step-by-step control.

// Declarative programming

// In declarative programming, you tell the computer WHAT you want, not how to do it.
// The system decides how to achieve it.

// Example (React Declarative)
// function App() {
//   return <h1>Hello World</h1>;
// }

// ✔ Here you simply declare:
// I want an <h1> with text
// React handles the DOM updates automatically.


// | Feature    | Imperative                  | Declarative                  |
// | ---------- | --------------------------- | ---------------------------- |
// | Focus      | HOW to do                   | WHAT you want                |
// | Control    | Manual step-by-step         | Handled by framework/library |
// | Code Style | More detailed               | More readable & clean        |
// | Example    | Vanilla JS DOM manipulation | React JSX UI rendering       |


// things must know before react (ES6+) Desctructuring,template literal,Arrow function , promise , async await  , fetch api , modules import and export

//Destructuring in js 
//Destructuring in JavaScript is a syntax that allows extracting values from arrays or properties from objects into separate variables, making code shorter and more readable. It is widely used in React for handling props and state.


// node js is runtime environment - used for running js code in server side
// for react the node js is used to third party tool by using npm

// npm - node package manager used for downloading third party tools