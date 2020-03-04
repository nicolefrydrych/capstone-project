import React from 'react'
import styled from 'styled-components'

export default function Bookmark({ id, onBookmarkClick, isBookmarked }) {
  return (
    <BookmarkStyled onClick={() => onBookmarkClick(id)} active={isBookmarked} />
  )
}

const BookmarkStyled = styled.button`
  height: 33px;
  padding: 0;
  outline: 0;
  border: 13px solid ${props => (props.active ? '#00CC00' : '#666600')};
  border-bottom-color: white;
  position: absolute;
  right: 21px;
  top: -15px;
`
