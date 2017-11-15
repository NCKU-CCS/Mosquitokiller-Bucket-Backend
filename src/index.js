import React from 'react'
import ReactDOM from 'react-dom'

// Redux store
import { Provider } from 'react-redux'
import store, { history } from './store'

// Route
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

// page Components
import Places, { Lamps } from './containers/Page'
import registerServiceWorker from './registerServiceWorker'



ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Places}/>
        <Route path="/lamps" component={Lamps}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
