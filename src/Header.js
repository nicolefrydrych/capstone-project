import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <StyledHeader>
      <h1>Choose a meal</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: #e6d97a;
  color: #f7f5e6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
`
