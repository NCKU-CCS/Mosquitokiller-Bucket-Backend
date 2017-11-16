import React from 'react'
import { Row, Column, FuncColumn, FuncButton } from './Table'

import './Item.css'

const ItemEdit = ({itemId, content, nonEditList, onFetchUpdateItem}) => {

  let formValue = {}
  return (
    <Row>
      {
        Object.entries(content).map((value, index) => {
          return (
            (!nonEditList.includes(value[0]))
              ? <Column>
                <input 
                  className='editColumn' 
                  type='text' 
                  key={index} 
                  defaultValue={value[1]} 
                  ref={(el)=>{formValue[value[0]] = el}} 
                /> </Column>
              : (typeof(value) === 'boolean') ? null : (
                <Column key={index} type={typeof(value)}>{value[1]}</Column>
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
