import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../../redux/places'
import styled from 'styled-components'
import { Row, FuncColumn, FuncButton } from './Table'

import './Item.css'

const onFetchAddItem = actions.onFetchAddItem

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

const mapDispatchToProps= (dispatch) => (
  bindActionCreators({onFetchAddItem}, dispatch)
)
export default connect(null, mapDispatchToProps)(ItemAddForm)