import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Title />
    </>
  )
}

export default App
