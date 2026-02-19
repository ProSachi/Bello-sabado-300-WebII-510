import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App2 from './App2.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App2 />
  </StrictMode>,
)
