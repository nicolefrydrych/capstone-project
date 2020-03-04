import React from 'react'
import styled from 'styled-components'
import { useToggle } from 'react-hooks-lib'
import Bookmark from './Bookmark'

export default function Card({
  id,
  name,
  instruction,
  image,
  products,
  handleBookmarkClick,
  isBookmarked,
}) {
  const { on, toggle } = useToggle(false)

  return (
    <CardStyled>
      <Bookmark
        id={id}
        onBookmarkClick={handleBookmarkClick}
        isBookmarked={isBookmarked}
      />
      <h1>{name}</h1>
      <ul>
        {products.map(product => (
          <li> {product} </li>
        ))}
      </ul>
      <ImageStyled src={image} />

      <h4 onClick={toggle}> Instruction</h4>
      {on && <div>{instruction}</div>}
    </CardStyled>
  )
}

const CardStyled = styled.section`
  position: relative;
  background: white;
  padding: 0px 30px 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`

const ImageStyled = styled.img`
  height: 100px;
  width: 220px;
`
