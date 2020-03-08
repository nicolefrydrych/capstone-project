import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation() {
  return (
    <NavigationStyled>
      <LinkStyled exact to="./">
        Choose a meal
      </LinkStyled>
      <LinkStyled to="/favourites"> Fridge </LinkStyled>
      <LinkStyled to="/favourites"> Shoppinglist </LinkStyled>
      <LinkStyled to="/favourites"> Favorites </LinkStyled>
    </NavigationStyled>
  )
}

const LinkStyled = styled(NavLink)`
  flex-grow: 1;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #93b5a1;
  color: white;
  border: 0.5px solid white;

  &.active {
    background: #b8a6b3;
  }
`

const NavigationStyled = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;

  border-top: 2px solid white;
`