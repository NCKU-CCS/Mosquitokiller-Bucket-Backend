import { createStore, combineReducers, applyMiddleware } from 'redux'

import * as reducers from './redux'

import middleWare from './middlewares'

// Router
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

export const history = createHistory()
const routeMiddleware = routerMiddleware(history)

// Reducers
const reducer = combineReducers({
  ...reducers,
  router: routerReducer
})

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare, routeMiddleware))

export default store