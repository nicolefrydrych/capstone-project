import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function StartPage() {
  return (
    <StartPageContainer>
      <LinkStyled to="/chooseameal">
        <FirstDivStyled>
          <DivStyled>Are you hungry? Let's cook! </DivStyled>
        </FirstDivStyled>
      </LinkStyled>
      <LinkStyled to="/shoppinglist">
        <SecondDivStyled>
          <DivStyled>Let's go shopping!</DivStyled>
        </SecondDivStyled>
      </LinkStyled>
    </StartPageContainer>
  )
}

const StartPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  background: #fcf4e9;
`

const FirstDivStyled = styled.section`
  width: auto;
  height: 660px;
  background-color: #bda8b2;
  margin-right: 5px;
  display: flex;
  align-items: center;
`

const SecondDivStyled = styled.section`
  width: auto;
  height: 660px;
  background-color: #a7bdaf;
  display: flex;
  align-items: center;
`

const DivStyled = styled.div`
  text-align: center;
  color: white;
  font-size: 22px;
`

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
`
