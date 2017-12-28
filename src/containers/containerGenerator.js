// Redux Binding
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from './App/view'

// store elements map to reducers of combineReducers
export default (props, actions) => {
  const mapStateToProps = store => ({
    response: store[props.route],
    ...props
  })
  const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
  return connect(mapStateToProps, mapDispatchToProps)(App)
}
