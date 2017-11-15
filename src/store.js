import { createStore, combineReducers, applyMiddleware } from 'redux'

import * as reducers from './redux'

import middleWare from './middlewares'

const reducer = combineReducers({
  ...reducers
})

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare))

export default store