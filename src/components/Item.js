import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../redux/places'

import styled from 'styled-components'

// ({onItemEdit, onFetchUpdateItem} = actions)

const Row = styled.ul`
  display: flex;
  padding: 0;
`

const Column = styled.li`
  list-style: none;  
  padding: 0.5rem 1rem;
  min-width: 7rem;
  max-width: 9rem;
  border-bottom: 1px solid gray;
`

const ColumnText = Column.extend`
  text-align:left;
`

const ColumnNum = Column.extend`
  text-align: right;
`

const Item = ({id, content}) => (
  <Row>
    <ColumnNum>{content.place_id}</ColumnNum>
    <ColumnText>{content.place_name}</ColumnText>
    <ColumnText>{content.place_address}</ColumnText>
    <ColumnText>{content.place_contact_person}</ColumnText>
    <ColumnNum>{content.place_phone}</ColumnNum>
    <ColumnNum>{content.created_at}</ColumnNum>
    <ColumnNum>{content.updated_at}</ColumnNum>
  </Row>
)

export default Item

// const mapDispatchToProps= (dispatch) => (
//   bindActionCreators({ onItemEdit, onFetchUpdateItem }, dispatch)
// )
// export default connect(null, mapDispatchToProps)(Item)