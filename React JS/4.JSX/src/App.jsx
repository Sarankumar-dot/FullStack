import './App.css'


// JS uses the comma operator here.
// All values are evaluated, but ONLY the last value is returned.
function user(){
  return "user","saran",true;
}

let name = "saran";

console.log(user()); // Output: true


// Normal JS variable (NOT React state)
// Value is read only during render
let isLogged = true;

function newFun(){
  // currently empty
}

function App() {
    
  return(
     // JSX must return a SINGLE parent element
     // Here we are using a <div> as the parent
    <div>
      <h1 style={{backgroundColor:"red",color : "yellow"}}>
        React tut
      </h1>

      <p>this is cool</p>

      {/* htmlFor is used instead of 'for' */}
      <label htmlFor="user">Username : </label> 
      <input id='user' type="text"/>

      {/* Using JS variable inside JSX */}
      <p>{name}</p>

      {/* camelCase attributes in React */}
      <button onClick={newFun}>Button</button>

      {
        // Conditional rendering
        isLogged == true && <p>Welcome to our website</p>
      }
      
    </div>

    /*
    =======================
    🔹 FRAGMENT EXAMPLE 🔹
    =======================

    Instead of wrapping everything in a <div> in the above,
    we can use a React Fragment.

    Fragment does NOT create an extra DOM node.

    Example:

    <>
      <h1>React tut</h1>
      <p>this is cool</p>
      <p>{name}</p>
      {isLogged && <p>Welcome to our website</p>}
    </>

    OR using explicit Fragment:

    for this we have to import it first
    import React from 'react'
    
    <React.Fragment>
      <h1>React tut</h1>
      <p>this is cool</p>
    </React.Fragment>

    NOTE:
    - Fragment is useful when you don’t want extra <div>s
    - JSX still returns ONE parent (Fragment acts as parent)
    */
  )
}

export default App
