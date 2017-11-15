// Redux Binding
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Redux Actions
import ReduxMethod from '../redux/reduxMethod'

import App from './App'

export default (route, props) => {
  const items = new ReduxMethod(route)
  const mapStateToProps = (store) => ({
    itemList: store[route],
    ...props
  })
  const mapDispatchToProps = (dispatch) =>(
    bindActionCreators(items.actions, dispatch)
  )
  return connect(mapStateToProps, mapDispatchToProps)(App)
}