import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  background-color: #252a2f;
`

const Nav = styled.ul`
  display: flex;
  justify-content: left;
  margin: 0;
`

const NavItem = styled.li`
  list-style: none;
  width: 10vw;
  text-align: center;
`
const StyledLink = styled(Link)`
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  &:hover {
    color: rgba(255,255,255,1);
  }
`

export default () => {
  return (
    <Header className='App-header'>
      <Nav>
          <NavItem><StyledLink to="/">Places</StyledLink></NavItem>
          <NavItem><StyledLink to="/lamps">Lamps</StyledLink></NavItem>
          <NavItem><StyledLink to="/mccs">Mcc</StyledLink></NavItem>
      </Nav>
    </Header>
  )
}