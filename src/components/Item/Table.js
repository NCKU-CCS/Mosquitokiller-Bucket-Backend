import styled from 'styled-components'

export const Row = styled.ul`
  display: flex;
  padding: 0;
  width: 80vw;
  justify-content: center;
`

export const FuncColumn = styled.li`
  list-style: none; 
  display:flex;
  align-items: center;
  justify-content: center;
`

export const FuncButton = styled.button`
  padding: 1px 15px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.15);
  background-color: #fff;
  &:hover {
    color: rgba(255,255,255,0.9);
    background-color: #51e6a6;
    border: 1px solid #51e6a6;
  } 
`