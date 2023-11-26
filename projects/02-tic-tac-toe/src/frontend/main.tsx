import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './board/App.tsx'
import './index.css'
import './board/App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
