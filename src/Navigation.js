import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

const Button = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`
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
  background: #e6d97a;

  &.active {
    background: #d67894;
  }
`

const NavigationStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 2px;
`
