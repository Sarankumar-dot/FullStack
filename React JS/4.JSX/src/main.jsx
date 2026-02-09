import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // here we care telling the react to add the app.jsx content to the index.html
  //strict mode checks the condition two times to ensure that there is no error in code it is not necessary to add that
  <StrictMode>  
    <App />
  </StrictMode>,
)
