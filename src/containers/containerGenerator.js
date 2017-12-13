// Redux Binding
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from './App/view'

export default (props, actions) => {
  const mapStateToProps = store => ({
    itemList: store[props.route],
    ...props
  })
  const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
  return connect(mapStateToProps, mapDispatchToProps)(App)
}
