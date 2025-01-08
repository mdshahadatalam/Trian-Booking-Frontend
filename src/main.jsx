import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import firebaseConfig from './DB/Firebase';
import { Provider } from 'react-redux';
import Store from './Fueature/Store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>,
)
