import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import * as reducers from './redux'

import middleWare from './middlewares'

// import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const reducer = combineReducers({
  ...reducers
})

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
