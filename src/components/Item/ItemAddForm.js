import React from 'react'
import styled from 'styled-components'
import { Row, FuncColumn, FuncButton } from './Table'

import './Item.css'

const ItemAddForm = ({form, onFetchAddItem}) => {
  let formValue = {}
  return (
    <Row>
    {
      form.map((value, index) => {
        return (
          <div key={index}>
            <label>{value[0]}</label>
            <input 
              className='editColumn' 
              type={value[1]} 
              defaultValue={null} 
              ref={(el)=>{formValue[value[0]] = el}} 
            />
          </div>
        )
      })
    }
    <FuncColumn>
      <FuncButton onClick={()=>{
        onFetchAddItem({...formValue})
      }}>Submit</FuncButton>
    </FuncColumn>
  </Row>
  )
}

export default ItemAddForm
