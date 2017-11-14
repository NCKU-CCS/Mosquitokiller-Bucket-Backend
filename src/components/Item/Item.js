import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../../redux/places'
import styled from 'styled-components'

import { Row, FuncColumn, FuncButton } from './Table'

const onItemEdit = actions.onItemEdit

const Column = styled.li.attrs({
  align: props => props.type === 'string' ? 'left' : 'right'
})
`
  list-style: none;  
  padding: 0.5rem 1rem;
  min-width: 7rem;
  max-width: 9rem;
  border-bottom: 1px solid gray;
  text-align: ${props => props.align}
`

const Item = ({id, content, onItemEdit}) => (
  <Row>
    {
      Object.values(content).map((value, index) => {
        return (
          <Column key={index} type={typeof(value)}>{value}</Column>
        )
      })
    }
    <FuncColumn>
      <FuncButton onClick={()=>{
        onItemEdit({
          ...content,
          isEditing: true
        })
      }}>Edit</FuncButton>
    </FuncColumn>
  </Row>
)


const mapDispatchToProps= (dispatch) => (
  bindActionCreators({onItemEdit}, dispatch)
)
export default connect(null, mapDispatchToProps)(Item)