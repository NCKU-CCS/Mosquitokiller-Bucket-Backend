import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../redux/places'

// ({onItemEdit, onFetchUpdateItem} = actions)

const Item = ({id, content}) => (
  <li>{content.place_name}</li>
)

export default Item

// const mapDispatchToProps= (dispatch) => (
//   bindActionCreators({ onItemEdit, onFetchUpdateItem }, dispatch)
// )
// export default connect(null, mapDispatchToProps)(Item)