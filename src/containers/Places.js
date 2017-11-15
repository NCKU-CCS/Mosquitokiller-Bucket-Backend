
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from './App'

// Redux Actions
import ReduxMethod from '../redux/reduxMethod'

const ROUTE = 'places'
const items = new ReduxMethod(ROUTE)

const mapStateToProps = store => ({
  itemList: store[ROUTE],
  itemId: 'place_id',
  nonEditList: ['place_id', 'created_at', 'updated_at', 'isEditing'],
  postModel: [
    ['place_name', 'string'],
    ['place_address', 'string'],
    ['place_contact_person', 'string'],
    ['place_phone', 'string']
  ]
})

const mapDispatchToProps = (dispatch) =>(
  bindActionCreators(items.actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)