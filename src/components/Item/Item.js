import React from 'react'
import { Row, Column, Value, FuncColumn, FuncButton } from './Table'



const Item = ({id, content, onItemEdit}) => (
  <Row>
    {
      Object.values(content).map((value, index) => {
        return (typeof(value) === 'boolean') ? null : (
          <Column key={index} type={typeof(value)}><Value >{value}</Value></Column>
        )
      })
    }
    <FuncColumn>
      <FuncButton onClick={
        onItemEdit.bind(this, {
          ...content,
          isEditing: true
        })
      }>Edit</FuncButton>
    </FuncColumn>
  </Row>
)

export default Item