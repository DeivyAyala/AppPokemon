import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { PokeApp } from './PokeApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PokeApp />
    </BrowserRouter>
  </StrictMode>,
)
