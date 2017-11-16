import React from 'react'
import styled from 'styled-components'
import { Row } from './Table'

const Column = styled.li`
  list-style: none;  
  padding: 0.5rem 1rem;
  width: 8rem;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  word-wrap: break-word;
  font-weight: 800;
  color: rgba(0,0,0,0.9);
`

const ItemHead = ({heads}) => {

  return (
    <Row>
      {
        heads.map((value, index) => {
          return (
            <Column key={index}>{value}</Column>
          )
        })
      }
    </Row>
  )
}

export default ItemHead