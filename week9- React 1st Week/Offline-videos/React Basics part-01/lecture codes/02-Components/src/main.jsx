import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

{/*below line basically means that reacts have control over the 'div' element which is present in index.html and in the 'App' component */}
createRoot(document.getElementById('root')).render(
    <App />
)
