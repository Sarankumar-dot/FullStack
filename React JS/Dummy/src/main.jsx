import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dummy from './Dummy.jsx'
import Useref from './Useref.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Useref />
  </StrictMode>,
)
