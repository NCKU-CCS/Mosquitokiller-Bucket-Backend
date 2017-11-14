import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const itemList = ({children}) => {
  return (
    <div>
      <h2>Items</h2>
      <ul className='list-group'>
        {children}
      </ul>
    </div>
  )
}

export default itemList