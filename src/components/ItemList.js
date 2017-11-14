import React from 'react'

// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

const itemList = ({name, children}) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul className='list-group'>
        {children}
      </ul>
    </div>
  )
}

export default itemList