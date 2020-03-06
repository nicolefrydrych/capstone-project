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
  background: #e6d97a;
  color: #f7f5e6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  position: fixed;
  z-index: 1;
  width: 100%;
`
