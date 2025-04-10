import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* todos los componentes que heredan de app osea toda la app porque es la definicion principal */}
      {/* pueden hacer uso del almacen redux store */}
      <App />
    </Provider>
  </React.StrictMode>,
)
