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
      <ProductListStyled>
        {products.map((product, index) => (
          <ProductListItemStyled key={index}> {product} </ProductListItemStyled>
        ))}
      </ProductListStyled>
      <ImageStyled src={image} />

      <InstructionStyled onClick={toggle}> Instruction</InstructionStyled>
      {on && <DivStyled>{instruction}</DivStyled>}
    </CardStyled>
  )
}

const CardStyled = styled.section`
  position: relative;
  display: grid;
  gap: 10px;
  background-image: linear-gradient(60deg, #fff3f2, white);
  padding: 22px 20px;
  border-radius: 15px;
  box-shadow: 0 10px 10px #0002;
  width: 290px;
`

const ImageStyled = styled.img`
  height: 100px;
  width: 240px;
  border: 5px solid #f7f5e6;
`
const ProductListStyled = styled.ul`
  list-style-type: none;
`

const ProductListItemStyled = styled.li`
  padding: 1px 13px;
`
const InstructionStyled = styled.h4`
  width: 90px;
  height: 21px;
  box-shadow: 0 6px 10px #0002;
  margin-left: 5px;
`

const DivStyled = styled.div`
  font-size: 16px;
  margin-left: 5px;
`
