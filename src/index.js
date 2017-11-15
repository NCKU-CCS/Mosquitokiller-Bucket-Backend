import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import store from './store'

import Places from './containers/Places'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  <Provider store={store}>
    <Places />
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
