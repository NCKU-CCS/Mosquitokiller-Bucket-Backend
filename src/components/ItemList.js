import React from 'react'
import styled from 'styled-components'

const ListGroup = styled.ul`
  padding: 0;
  margin: 1rem;
`

const itemList = ({children}) => {
  return (
    <section>
      <ListGroup>
        {children}
      </ListGroup>
    </section>
  )
}

export default itemList