import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx' //Redux: 2. adım. import edilir ve provider ile sarmanlanır.

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
  </Provider>,
)
