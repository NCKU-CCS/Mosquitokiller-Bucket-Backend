import React from 'react'
import {
  Row, Column, Value, FuncColumn, FuncButton, EditInput,
  getInputValue, getArrayInputValue
} from './Table'
import { SingleErrorMessage } from './errorMsg'

const ItemEdit = ({
  itemId,
  content,
  form,
  nonEditList,
  onFetchUpdateItem,
  errorResponse = {}
}) => {
  this.formValue = {}
  this.getInputValue = getInputValue.bind(this)
  this.getArrayInputValue = getArrayInputValue.bind(this)
  return (
    <Row>
      {Object.entries(content).map((value, index) => {
        return nonEditList.includes(value[0])
          // show immutable data
          ? typeof value[1] === 'boolean'
              ? null
              : <Column key={index} type={typeof value[1]}>
                <Value>{value[1]}</Value>
              </Column>
          // show array edit form
          : typeof form[value[0]] === 'object'
              ? value[1].map((subValue, subIndex) => (
                <Column key={`${index}-${subIndex}`}>
                  <EditInput
                    type={form[value[0]].type}
                    defaultValue={subValue}
                    data-key={value[0]}
                    data-index={subIndex}
                    innerRef={this.getArrayInputValue}
                    />
                </Column>
                ))
              // show normal edit form
              : <Column key={index}>
                <EditInput
                  type={form[value[0]]}
                  defaultValue={value[1]}
                  data-key={value[0]}
                  innerRef={this.getInputValue}
                  />
              </Column>
      })}
      {/* Send Update Request */}
      <FuncColumn>
        <FuncButton
          onClick={() => {
            onFetchUpdateItem({
              [itemId]: { value: content[itemId] },
              ...this.formValue
            })
          }}
        >
          Send
        </FuncButton>
        <SingleErrorMessage currentId={content[itemId]} errorResponse={errorResponse} />
      </FuncColumn>
    </Row>
  )
}

export default ItemEdit
