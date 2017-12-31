import React from 'react'
import { Row, Column, Value, FuncColumn, FuncButton } from './Table'
import RemoveCheckBox from './RemoveCheckBox'

const dataColumn = (index, value) => (
  <Column key={index} type={typeof value}><Value>{value}</Value></Column>
)

const Item = ({ itemId, divideList, content, onItemEdit, onFetchRemoveItem }) => (
  <Row>
    <FuncColumn><RemoveCheckBox id={content[itemId]} onFetchRemoveItem={onFetchRemoveItem} /></FuncColumn>
    {/* value[0] = key (column name), value[1] = value (column value) */}
    {Object.entries(content).map((value, index) => {
      return typeof value[1] === 'boolean'
        ? null
        : divideList.includes(value[0])
            ? value[1].map((value, index) => dataColumn(index, value))
            : dataColumn(index, value[1])
    })}
    <FuncColumn>
      <FuncButton
        onClick={onItemEdit.bind(this, {
          ...content,
          isEditing: true
        })}
      >
        Edit
      </FuncButton>
    </FuncColumn>
  </Row>
)

export default Item
