import React from 'react'
import styled from 'styled-components'
import { useToggle } from 'react-hooks-lib'

export default function Bookmark() {
  const { on, toggle } = useToggle(false)

  return <BookmarkStyled onClick={toggle} active={on} />
}

const BookmarkStyled = styled.button`
  height: 33px;
  padding: 0;
  outline: 0;
  border: 13px solid ${props => (props.active ? '#00CC00' : '#666600')};
  border-bottom-color: white;
  position: absolute;
  right: 21px;
  top: -11px;
`
