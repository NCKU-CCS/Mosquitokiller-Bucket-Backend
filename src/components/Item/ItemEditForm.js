import React from 'react'
import styled from 'styled-components'
import { Row, FuncColumn, FuncButton } from './Table'

import './Item.css'

const ItemEdit = ({itemId, content, nonEditList, onFetchUpdateItem}) => {

  const editAvailable = (value) => {
    if (!nonEditList.includes(value[0])) return value
  }

  let formValue = {}
  return (
    <Row>
      {
        Object.entries(content).filter(editAvailable).map((value, index) => {
          return (
            <input 
              className='editColumn' 
              type='text' 
              key={index} 
              defaultValue={value[1]} 
              ref={(el)=>{formValue[value[0]] = el}} 
            />
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
