import React from 'react'
import styled from 'styled-components'
import { Row, FuncColumn, FuncButton } from './Table'

import './Item.css'

const SectionAddForm = styled.section`
  position: relative;
  z-index: 1;
  background-color: #fafbfb;
  border: 1px solid #ccc;
`
const FormRow = Row.extend`
  display: block;
  margin: 1rem auto;
  padding: 1rem;
  width: 80%;
  background-color: #fff;
  // box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  border: 1px solid rgba(27,31,35,0.15);
  border-radius: 3px;
  text-align: center;
}
`

const FormColumn = styled.li`
  display: inline-block;
  margin: 1rem;
  list-style: none;
`

const InputGroup = styled.div`
  display: flex;
`

const Label = styled.span`
  display: inline-block;
  padding: 0 10px;
  // width: 15vw;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  border-radius: 3px 0 0 3px;
  border: 1px solid #ccc;
  background-color: #f6f8fa;
  color: #555;
  text-align: left;
`

const SubmitButton = FuncButton.extend`
  border-radius: 5px;
  padding: 5px 15px;
`

const ItemAddForm = ({form, onFetchAddItem}) => {
  let formValue = {}
  return (
    <SectionAddForm>

      <FormRow>
      {
        Object.entries(form).map((value, index) => {
          return (
            <FormColumn key={index}>
              <InputGroup>
                <Label>{value[0]}</Label>
                <input 
                  className='editColumn' 
                  type={value[1]} 
                  defaultValue={null} 
                  ref={(el)=>{formValue[value[0]] = el}} 
                />
              </InputGroup>
            </FormColumn>
          )
        })
      }
      <FuncColumn>
        <SubmitButton onClick={()=>{
          onFetchAddItem({...formValue})
        }}>Submit</SubmitButton>
      </FuncColumn>
    </FormRow>
  </SectionAddForm>
  )
}

export default ItemAddForm
