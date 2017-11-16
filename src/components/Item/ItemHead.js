import React from 'react'
import styled from 'styled-components'
import { Row, Column, Value} from './Table'

const HeadColumn = styled(Column)`
  text-align: center;
  list-style: none;  
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
            <HeadColumn key={index}>
              <Value>{value}</Value>
            </HeadColumn>
          )
        })
      }
    </Row>
  )
}

export default ItemHead