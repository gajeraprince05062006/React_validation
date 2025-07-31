import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sumdemo from './Sumdemo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sumdemo/>
  </StrictMode>,
)
