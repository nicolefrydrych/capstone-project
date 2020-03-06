import React from 'react'
import styled from 'styled-components'
import { useToggle } from 'react-hooks-lib'

export default function Product({ link }) {
  const { on, toggle } = useToggle(false)

  return <StyledImage src={link} onClick={toggle} active={on}></StyledImage>
}

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  border: solid ${props => (props.active ? 'black' && '4px' : 'white')};
  border-radius: 10%;
`
