import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { UIProvide } from './context/UIContext.jsx'
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <UIProvide>
          <StrictMode>
    <App />
  </StrictMode>
    </UIProvide>

  </ThemeProvider>

)

