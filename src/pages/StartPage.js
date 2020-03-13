import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function StartPage() {
  return (
    <StartPageContainer>
      <FirstDivStyled>
        <DivStyled>
          <NavLink to="/chooseameal"> Are you hungry? Let's cook! </NavLink>
        </DivStyled>
      </FirstDivStyled>
      <SecondDivStyled>
        <DivStyled>
          <NavLink to="/shoppinglist">Let's go shopping!</NavLink>
        </DivStyled>
      </SecondDivStyled>
    </StartPageContainer>
  )
}

const StartPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`

const FirstDivStyled = styled.section`
  width: 200px;
  height: 660px;
  background-color: #b8a6b3;
  margin-right: 5px;
  display: flex;
  align-items: center;
`

const SecondDivStyled = styled.section`
  width: 200px;
  height: 660px;
  background-color: #93b5a1;
  display: flex;
  align-items: center;
`

const DivStyled = styled.div`
  text-align: center;
  color: white;
  font-size: 22px;
`
