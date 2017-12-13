import React from 'react'
import styled from 'styled-components'

const ListGroup = styled.table`
  padding: 0;
  margin: 1rem auto;
`

const itemList = ({ children }) => {
  return (
    <section>
      <ListGroup>
        {children}
      </ListGroup>
    </section>
  )
}

export default itemList
