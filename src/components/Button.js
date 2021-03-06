import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ buttonName, ...props }) {
  return <ButtonStyled {...props}>{buttonName}</ButtonStyled>
}

const ButtonStyled = styled.button`
  padding: 12px 100px;
  border: none;
  border-radius: 12px;
  background: #b8a6b3;
  font-size: 18px;
  text-align: center;
  color: white;
  font-family: 'Gill Sans';
  margin-bottom: ${props => props.margin || 0}px;
`
