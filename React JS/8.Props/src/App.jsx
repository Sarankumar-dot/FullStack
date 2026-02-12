import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/footer'




// context api - by using this we dont need to send props from parent to child we can directly access it
// there are two thing provider and consumer in context api

// first we have to export this and then use it in other components
// we are gonna use this value in the Header component
export let userContext = createContext(); // creating context is the first part

function App() {
  // data for context api
  const [ state, setState ] = useState({
    namee: "saran",
    agee: 21,
    genderr: "male",
  });

  const [count, setCount] = useState(0);

  // sending a prop to Header.jsx from here

  let value = {
    name : "saran",
    age :21
  }
  return (
    // using the context here is the second part
    <userContext.Provider value={state}> 
      <>
        
          <Header value={value} />
          <Content />
          <Footer />
       
      </>
    </userContext.Provider >
  );
}

export default App
