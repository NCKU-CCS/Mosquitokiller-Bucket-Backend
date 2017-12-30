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
`

const ErrorMessageBox = ({errorResponse, name}) => {
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

export default ErrorMessageBox
