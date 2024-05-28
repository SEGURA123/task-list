import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Taskcontextprovider from './context/Taskcontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Taskcontextprovider>
      <App />
    </Taskcontextprovider>
  </React.StrictMode>,
)
