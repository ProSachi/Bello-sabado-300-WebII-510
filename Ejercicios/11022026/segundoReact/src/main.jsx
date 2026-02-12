import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Hola from './hola'
import Home from './pages/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hola />
    <Home />
  </StrictMode>,
)
