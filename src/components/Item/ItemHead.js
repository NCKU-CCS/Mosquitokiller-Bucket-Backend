import React from 'react'
import styled from 'styled-components'
import { Row, HeadColumn, Value} from './Table'

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