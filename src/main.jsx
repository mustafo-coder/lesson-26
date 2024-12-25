import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from './service/api.js'
createRoot(document.getElementById('root')).render(
  <ApiProvider api={productsApi}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>

)
