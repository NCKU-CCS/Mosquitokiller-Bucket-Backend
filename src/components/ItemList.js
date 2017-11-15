import React from 'react'

const itemList = ({children}) => {
  return (
    <section>
      <ul className='list-group'>
        {children}
      </ul>
    </section>
  )
}

export default itemList