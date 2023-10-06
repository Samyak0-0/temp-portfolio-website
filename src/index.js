import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from "./App"
import { ContextProvider } from './context';


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
  )
  