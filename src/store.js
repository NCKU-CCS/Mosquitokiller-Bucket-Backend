import { createStore, combineReducers, applyMiddleware } from 'redux'

import reducers from './redux'

import middleWares from './middlewares'

// Router
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

export const history = createHistory()
const routeMiddleware = routerMiddleware(history)

// Reducers
// import reducers contains [places, lamps, mcc, states]
const reducer = combineReducers({
  ...reducers,
  router: routerReducer
})

// Production, const store = createStore(reducer)
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWares, routeMiddleware)
)

export default store
