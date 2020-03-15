import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ buttonName }) {
  return <ButtonStyled>{buttonName}</ButtonStyled>
}

const ButtonStyled = styled.button`
  padding: 15px 100px;
  border: none;
  border-radius: 12px;
  background: #b8a6b3;
  font-family: monospace;
  font-size: 18px;
  text-align: center;
  color: white;
`
