import styled from 'styled-components'

export const Row = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
`

export const Column = styled.li.attrs({
  align: props => props.type === 'string' ? 'left' : 'right'
})`
  list-style: none;  
  width: 10rem;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  text-align: ${props => props.align};
  word-wrap: break-word;
`

export const Value = styled.p`
  margin: 0.5rem 1rem;
`

export const FuncColumn = Column.extend`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
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