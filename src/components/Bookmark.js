import React from 'react'
import styled from 'styled-components'

export default function Bookmark({ _id, onBookmarkClick, statusOfBookmark }) {
  return (
    <BookmarkStyled
      data-cy="bookmark"
      onClick={() => onBookmarkClick(_id)}
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
  right: 22px;
  top: -15px;
`
