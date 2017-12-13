import React from 'react'
import styled from 'styled-components'
import { FuncButton, AddInput } from './Table'

const SectionAddForm = styled.section`
  position: relative;
  z-index: 1;
  background-color: #fafbfb;
  border: 1px solid #ccc;
`

const FormRow = styled.ul`
  display: block;
  margin: 1rem auto;
  padding: 1rem;
  width: 80%;
  background-color: #fff;
  border: 1px solid rgba(27,31,35,0.15);
  border-radius: 3px;
  text-align: center;
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
  padding: 0 0.5rem;
  width: 12rem;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  border-radius: 3px 0 0 3px;
  border: 1px solid #ccc;
  background-color: #f6f8fa;
  color: #555;
  text-align: left;
`

const SubmitColumn = styled.li`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  margin: 0 auto;
`

const SubmitButton = FuncButton.extend`
  border-radius: 5px;
  padding: 5px 15px;
  background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
  color: #fff;
  &:hover {
    background-image: linear-gradient(-180deg, #2fcb53 0%, #269f42 90%);
    border-color: rgba(27,31,35,0.5);
  }
`

const ItemAddForm = ({ form, onFetchAddItem }) => {
  let formValue = {}
  return (
    <SectionAddForm>
      <FormRow>
        {Object.entries(form).map((value, index) => {
          return typeof value[1] === 'object'
            // show multiple input
            ? value[1].subLabels.map((subLabel, subIndex) => (
              <FormColumn key={`${index}-${subIndex}`}>
                <InputGroup>
                  <Label>{subLabel}</Label>
                  <AddInput
                    type={value[1].type}
                    defaultValue={null}
                    innerRef={el => {
                      formValue[value[0]] = formValue[value[0]] || []
                      formValue[value[0]][subIndex] = el
                    }}
                    />
                </InputGroup>
              </FormColumn>
              ))
            // show normal input
            : <FormColumn key={index}>
              <InputGroup>
                <Label>{value[0]}</Label>
                <AddInput
                  type={value[1]}
                  defaultValue={null}
                  innerRef={el => {
                    formValue[value[0]] = el
                  }}
                  />
              </InputGroup>
            </FormColumn>
        })}
        <SubmitColumn>
          <SubmitButton
            onClick={() => {
              onFetchAddItem({ ...formValue })
            }}
          >
            Submit
          </SubmitButton>
        </SubmitColumn>
      </FormRow>
    </SectionAddForm>
  )
}

export default ItemAddForm
