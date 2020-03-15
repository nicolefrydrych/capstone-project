import React from 'react'
import styled from 'styled-components'

export default function Bookmark({ id, onBookmarkClick, statusOfBookmark }) {
  return (
    <BookmarkStyled
      onClick={() => onBookmarkClick(id)}
      active={statusOfBookmark}
    />
  )
}

const BookmarkStyled = styled.button`
  height: 33px;
  padding: 0;
  outline: 0;
  border: 13px solid ${props => (props.active ? '#ba97a0' : '#e0c3c6')};
  border-bottom-color: white;
  position: absolute;
  right: 21px;
  top: -15px;
`
