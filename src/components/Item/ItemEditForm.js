import React from 'react'
import { Row, Column, Value, FuncColumn, FuncButton } from './Table'

import './Item.css'

const ItemEdit = ({itemId, content, form, nonEditList, onFetchUpdateItem}) => {

  let formValue = {}
  return (
    <Row>
      {
        Object.entries(content).map((value, index) => {
          return (
            (!nonEditList.includes(value[0]))
              ? <Column key={index}>
                  <input 
                    className='editColumn' 
                    type={form[value[0]]}
                    defaultValue={value[1]} 
                    ref={(el)=>{formValue[value[0]] = el}} 
                  />
                </Column>
              : (typeof(value[1]) === 'boolean') ? null : (
                <Column key={index} type={typeof(value)}>
                  <Value>{value[1]}</Value>
                </Column>
              )
          )
        })
      }
      <FuncColumn>
        <FuncButton onClick={()=>{
          onFetchUpdateItem({[itemId]: {value: content[itemId]}, ...formValue})
        }}>Send</FuncButton>
      </FuncColumn>
    </Row>
)}

export default ItemEdit
