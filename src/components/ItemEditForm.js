import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../redux/places'

import { Row, FuncColumn, FuncButton } from './Table'

import './Item.css'

const onFetchUpdateItem = actions.onFetchUpdateItem

const nonEditList = ['place_id', 'created_at', 'updated_at', 'isEditing']

const editAvailable = (value) => {
  if (!nonEditList.includes(value[0])) return value
}

const ItemEdit = ({id, content, onFetchUpdateItem}) => {
  let formValue = {};
  return (
    <Row>
      {
        Object.entries(content).filter(editAvailable).map((value, index) => {
          return (
            <input className='editColumn' type='text' key={index} defaultValue={value[1]} ref={(el)=>{formValue[value[0]] = el}} />
          )
        })
      }
      <FuncColumn>
        <FuncButton onClick={()=>{
          // onFetchUpdateItem({formValue})
          console.log(formValue['place_name'].value)
        }}>Send</FuncButton>
      </FuncColumn>
    </Row>
)}

const mapDispatchToProps= (dispatch) => (
  bindActionCreators({onFetchUpdateItem}, dispatch)
)
export default connect(null, mapDispatchToProps)(ItemEdit)