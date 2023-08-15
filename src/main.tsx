import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeContext from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContext>
      <CssBaseline />
      <App />
    </ThemeContext>
  </React.StrictMode>
)
