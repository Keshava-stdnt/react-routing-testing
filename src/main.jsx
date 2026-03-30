import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './App.css'
import App from './App.jsx'
import IncrementContext from './context/IncrementContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <IncrementContext>
        <App />
      </IncrementContext>
    </BrowserRouter>
  </StrictMode>
)
