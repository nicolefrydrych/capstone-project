import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ headerName }) {
  return (
    <StyledHeader>
      <h1>{headerName}</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: #869c90;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  border-bottom: 2px solid white;
  position: fixed;
  z-index: 1;
  width: 100%;
`
