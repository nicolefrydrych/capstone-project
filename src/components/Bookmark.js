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
  border: 13px solid ${props => (props.active ? '#b7748b' : '#e6b5d3')};
  border-bottom-color: white;
  position: absolute;
  right: 21px;
  top: -15px;
`
