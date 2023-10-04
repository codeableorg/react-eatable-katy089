import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global/index'
import { colors } from "./styles/global/colors";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
