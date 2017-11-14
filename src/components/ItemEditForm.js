import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../redux/places'

import styled from 'styled-components'

const onFetchUpdateItem = actions.onFetchUpdateItem

const editList = ['place_id', 'created_at', 'updated_at', 'isEditing']

const editAvailable = (value) => {
  if (!editList.includes(value[0])) return value
}

const Row = styled.ul`
  display: flex;
  padding: 0;
`

const FuncColumn = styled.li`
  list-style: none; 
  display:flex;
  align-items: center;
`

const EditColumn = styled.input`
  padding: 0.5rem 1rem;
  min-width: 7rem;
  max-width: 9rem;
  border-bottom: 1px solid gray;
`

const ItemEdit = ({id, content, onFetchUpdateItem}) => (
  <Row>
  {
    Object.entries(content).filter(editAvailable).map((value, index) => {
      return (
        <EditColumn key={index} value={value[1]} />
      )
    })
  }
</Row>
)

const mapDispatchToProps= (dispatch) => (
  bindActionCreators({onFetchUpdateItem}, dispatch)
)
export default connect(null, mapDispatchToProps)(ItemEdit)