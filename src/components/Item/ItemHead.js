import React from 'react'
import styled from 'styled-components'
import { Row, Value} from './Table'

const HeadColumn = styled.th`
  list-style: none;  
  width: 10rem;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  color: rgba(0,0,0,0.9);
  font-weight: 800;
  text-align: center;
  word-wrap: break-word;
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