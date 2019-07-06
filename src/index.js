import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, applyMiddleware } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer/reducer'
import App from './App'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
)
