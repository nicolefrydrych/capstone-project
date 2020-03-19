import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import hintsData from '../hint'

export default function StartPage() {
  const randomNumber = Math.floor(Math.random(1) * 2)

  const veganHints = hintsData[Math.floor(Math.random() * hintsData.length)]

  return (
    <StartPageContainer>
      <LinkStyled to="/chooseameal">
        <FirstDivStyled>
          {randomNumber === 0 && (
            <HintStyledLeft>Tip of the day: {veganHints}</HintStyledLeft>
          )}
          <DivStyled>Are you hungry? Let's cook! </DivStyled>
        </FirstDivStyled>
      </LinkStyled>
      <LinkStyled to="/shoppinglist">
        <SecondDivStyled>
          {randomNumber === 1 && (
            <HintStyledRight>Tip of the day: {veganHints}</HintStyledRight>
          )}
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
  height: 100%;
`

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
`

const HintStyledRight = styled.p`
  position: absolute;
  top: 16px;
  right: 16px;
  border: 1px solid #baafb0;
  text-align: center;
  border-radius: 50px 10px 50px 50px;
  padding: 20px 14px;
  width: 140px;
  background-color: #d3e0d7;
  color: #9e9393;
`

const HintStyledLeft = styled.p`
  position: absolute;
  top: 16px;
  left: 16px;
  border: 1px solid #baafb0;
  text-align: center;
  border-radius: 10px 50px 50px 50px;
  padding: 20px 14px;
  width: 140px;
  background-color: #e6d4d7;
  color: #9e9393;
`

const FirstDivStyled = styled.section`
  position: relative;
  width: auto;
  height: 100%;
  background-color: #bda8b2;
  margin-right: 5px;
  display: flex;
  align-items: center;
`

const SecondDivStyled = styled.section`
  position: relative;
  width: auto;
  height: 100%;
  background-color: #a7bdaf;
  display: flex;
  align-items: center;
`

const DivStyled = styled.div`
  margin: 0 auto;
  text-align: center;
  color: white;
  font-size: 22px;
`
