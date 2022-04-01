import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'react-day-picker/dist/style.css'
import { DateContextProvider } from './context/DateContext'

ReactDOM.render(
  <React.StrictMode>
    <DateContextProvider>
      <App />
    </DateContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
