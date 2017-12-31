import styled from 'styled-components'

/**
 * css constant
 */

const columnWidth = '10rem'

const columnStyled = `
  list-style: none;  
  width: ${columnWidth};
  border-bottom: 1px solid rgba(0,0,0,0.15);
  word-wrap: break-word;
`

/**
 *
 * Export Table Components
 *
 */
export const Row = styled.tr`
  display: flex;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
`

export const HeadColumn = styled.th`
  ${columnStyled}
  color: rgba(0,0,0,0.9);
  text-align: center;
  font-weight: 800;
`

export const Column = styled.td.attrs({
  align: props => (props.type === 'string' ? 'left' : 'right')
})`
  ${columnStyled}
  text-align: ${props => props.align};
`

export const Value = styled.p`
  margin: 0.5rem 1rem;
`

export const FuncColumn = Column.extend`
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
`

export const FuncButton = styled.button`
  padding: 1px 15px;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  border: 1px solid rgba(27,31,35,0.2);
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
  &:hover {
    background-color: #51e6a6;
    background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
    border: 1px solid rgba(27,31,35,0.35);
  } 
`

export const EditInput = styled.input`
  margin: 0.5rem 1rem;
  padding: 0.5rem;
`

export const AddInput = styled.input`
  height: 30px;
  box-sizing: border-box;
  padding: 0;
  width: 7rem;
  border: 1px solid #ccc;
`
