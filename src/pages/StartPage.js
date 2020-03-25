import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import tipsData from '../tips'

export default function StartPage() {
  const randomNumber = Math.floor(Math.random(1) * 2)

  const veganHints = tipsData[Math.floor(Math.random() * tipsData.length)]

  return (
    <StartPageContainer>
      <LinkStyled to="/selectproducts">
        <LeftBoxStyled>
          {randomNumber === 0 && (
            <LeftHintStyled>Tip of the day: {veganHints}</LeftHintStyled>
          )}
          <TextInHint>Are you hungry? Let's cook! </TextInHint>
        </LeftBoxStyled>
      </LinkStyled>
      <LinkStyled to="/shoppinglist">
        <RightBoxStyled>
          {randomNumber === 1 && (
            <RightHintStyled>Tip of the day: {veganHints}</RightHintStyled>
          )}
          <TextInHint>Let's go shopping!</TextInHint>
        </RightBoxStyled>
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

const LeftBoxStyled = styled.section`
  position: relative;
  width: auto;
  height: 100%;
  background-color: #bda8b2;
  margin-right: 5px;
  display: flex;
  align-items: center;
`

const RightBoxStyled = styled.section`
  position: relative;
  width: auto;
  height: 100%;
  background-color: #a7bdaf;
  display: flex;
  align-items: center;
`

const LeftHintStyled = styled.p`
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

const RightHintStyled = styled.p`
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

const TextInHint = styled.div`
  margin: 0 auto;
  text-align: center;
  color: white;
  font-size: 22px;
`
