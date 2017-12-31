import React from 'react'
import styled from 'styled-components'
const RemoveButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 50%;
  cursor: pointer;
  border-radius: 10px;
  background-color: hsl(349, 86%, 50%);
  color: #fff;
  border: 1px solid rgba(27,31,35,0.2);
  &:hover {
    background-color: hsl(349, 86%, 40%);
    border: 1px solid rgba(27,31,35,0.35);
  }
`

class RemoveCheckBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false
    }
    this.toggleChange = this.toggleChange.bind(this)
  }
  toggleChange () {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render () {
    return (
      <div>
        <input type='checkbox'
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        {
          (this.state.isChecked)
            ? <RemoveButton onClick={this.props.onFetchRemoveItem.bind(this, this.props.id)}>Remove</RemoveButton>
            : null
        }
      </div>
    )
  }
}

export default RemoveCheckBox
