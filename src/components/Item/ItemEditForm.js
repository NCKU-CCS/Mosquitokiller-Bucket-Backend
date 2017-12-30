import React from 'react'
import { Row, Column, Value, FuncColumn, FuncButton, EditInput } from './Table'
import { SingleErrorMessage } from './errorMsg'

const ItemEdit = ({
  itemId,
  content,
  form,
  nonEditList,
  onFetchUpdateItem,
  errorResponse = {}
}) => {
  let formValue = {}
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
                    innerRef={el => {
                      formValue[value[0]] = formValue[value[0]] || []
                      formValue[value[0]][subIndex] = el
                    }}
                    />
                </Column>
                ))
              // show normal edit form
              : <Column key={index}>
                <EditInput
                  type={form[value[0]]}
                  defaultValue={value[1]}
                  innerRef={el => {
                    formValue[value[0]] = el
                  }}
                  />
              </Column>
      })}
      {/* Send Update Request */}
      <FuncColumn>
        <FuncButton
          onClick={() => {
            onFetchUpdateItem({
              [itemId]: { value: content[itemId] },
              ...formValue
            })
          }}
        >
          Send
        </FuncButton>
        {
          <SingleErrorMessage
            errorResponse={errorResponse}
          />
        }
      </FuncColumn>
    </Row>
  )
}

export default ItemEdit
