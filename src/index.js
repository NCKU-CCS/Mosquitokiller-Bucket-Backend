import React from 'react'
import ReactDOM from 'react-dom'

// Redux store
import { Provider } from 'react-redux'
import store, { history } from './store'

// Route
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

// page Components
import Pages from './containers/Page'
import registerServiceWorker from './registerServiceWorker'

// Global CSS
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Pages.Places}/>
        <Route path="/lamps" component={Pages.Lamps}/>
        <Route path="/mccs" component={Pages.Mccs}/>
        <Route path="/states" component={Pages.States}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
