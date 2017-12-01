import styled from 'styled-components'

export const Row = styled.tr`
  display: flex;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
`

export const Column = styled.td.attrs({
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
  border: 1px solid rgba(27,31,35,0.2);
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
  &:hover {
    background-color: #51e6a6;
    background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
    border: 1px solid rgba(27,31,35,0.35);
  } 
`