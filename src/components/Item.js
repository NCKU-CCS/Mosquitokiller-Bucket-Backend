import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../redux/places'

import styled from 'styled-components'

const onItemEdit = actions.onItemEdit

const Row = styled.ul`
  display: flex;
  padding: 0;
`

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

const FuncColumn = styled.li`
  list-style: none; 
  display:flex;
  align-items: center;
`

const EditButton = styled.button`
  padding: 1px 15px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid gray;
  background-color: #fff;
  &:hover {
    color: rgba(255,255,255,0.9);
    background-color: #51e6a6;
    border: 1px solid #51e6a6;
  } 
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
      <EditButton onClick={()=>{
        onItemEdit({
          ...content,
          isEditing: true
        })
      }}>Edit</EditButton>
    </FuncColumn>
  </Row>
)


const mapDispatchToProps= (dispatch) => (
  bindActionCreators({onItemEdit}, dispatch)
)
export default connect(null, mapDispatchToProps)(Item)