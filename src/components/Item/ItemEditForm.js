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
            (nonEditList.includes(value[0]))
              // show immutable data
              ? (typeof(value[1]) === 'boolean') ? null : (
                <Column key={index} type={typeof(value[1])}>
                  <Value>{value[1]}</Value>
                </Column>
              )
              : (typeof(form[value[0]]) === 'object')
                // show array edit form
                ? value[1].map((subValue, subIndex) => (
                  <Column key={`${index}-${subIndex}`}>
                    <input 
                      className='editInput' 
                      type={form[value[0]][0]}
                      defaultValue={subValue} 
                      ref={(el)=>{
                        formValue[value[0]] = formValue[value[0]] || []
                        formValue[value[0]][subIndex] = el
                      }}
                    />
                  </Column>
                ))
                // show normal edit form
                : <Column key={index}>
                    <input 
                      className='editInput' 
                      type={form[value[0]]}
                      defaultValue={value[1]} 
                      ref={(el)=>{formValue[value[0]] = el}} 
                    />
                  </Column>
          )
        })
      }
      {/* Send Update Request */}
      <FuncColumn>
        <FuncButton onClick={()=>{
          onFetchUpdateItem({[itemId]: {value: content[itemId]}, ...formValue})
        }}>Send</FuncButton>
      </FuncColumn>
    </Row>
)}

export default ItemEdit
