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
          <ListStyled> {product} </ListStyled>
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
  display: grid;
  gap: 15px;
  background-image: linear-gradient(60deg, #fff3f2, white);
  padding: 20px 20px;
  border-radius: 15px;
  box-shadow: 0 10px 10px #0002;
  width: 290px;
`

const ImageStyled = styled.img`
  height: 100px;
  width: 240px;
  border: 5px solid #f7f5e6;
`
const ListStyled = styled.ul`
  padding: 1px 13px;
`
