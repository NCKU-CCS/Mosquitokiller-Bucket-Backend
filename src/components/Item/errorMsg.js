import React from 'react'
import styled from 'styled-components'

const MessageBox = styled.div`
  position: absolute;
  right: 10px;
  color: red;
`

const NotifyBox = styled.div`
  position: absolute;
  right: 10px;
  top: -25px;
  color: #a94442;
  border: 1px solid #ebccd1;
  border-radius: 5px;
  background-color: rgb(242,222,222);
  &:after {
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    margin: auto;
    content: '';
    width: 10px;
    height: 10px;
    display: inline-block;
    border: 1px solid #ebccd1;
    background-color: rgb(242,222,222);
    transform: rotate3d(0, 0, 1, 45deg);
    z-index: -1;
  }
`

const ErrorMessage = ({errorResponse, name}) => {
  const errorMsg = errorResponse.error
  return (
    (errorMsg && errorMsg[name])
      ? <MessageBox>{errorMsg[name].msg}</MessageBox>
      : null
  )
}

export const SingleErrorMessage = ({errorResponse}) => {
  return (
    <NotifyBox>{errorResponse.error}</NotifyBox>
  )
}

export default ErrorMessage
