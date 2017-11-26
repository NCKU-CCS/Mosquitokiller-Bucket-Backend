import React from 'react'
import { Row, Column, Value, FuncColumn, FuncButton } from './Table'



const Item = ({id, divideList, content, onItemEdit}) => (
  <Row>
    {
      Object.entries(content).map((value, index) => {
        return (typeof(value[1]) === 'boolean') ? null 
          : (divideList.includes(value[0])) 
            ? value[1].map((value, index) =>
              ( <Column key={index} type={typeof(value)}><Value>{value}</Value></Column> )
            )
            : ( <Column key={index} type={typeof(value[1])}><Value>{value[1]}</Value></Column> )
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