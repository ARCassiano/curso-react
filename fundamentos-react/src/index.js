import './index.css'
import App from './App'
import ReactDom from 'react-dom/client'
import React from 'react'

const container = document.getElementById("root")
const root = ReactDom.createRoot(container)
root.render(<App />)