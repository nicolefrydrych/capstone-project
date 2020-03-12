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

      <ImageStyled src={image} />

      {on === false ? (
        <InstructionStyled onClick={toggle}> show more</InstructionStyled>
      ) : (
        <InstructionStyled onClick={toggle}> show less</InstructionStyled>
      )}
      {on && (
        <DivStyled>
          <p>{instruction}</p>
          <ProductListStyled>
            Ingredients:
            {products.map((product, index) => (
              <ProductListItemStyled key={index}>
                {product}
              </ProductListItemStyled>
            ))}
          </ProductListStyled>
        </DivStyled>
      )}
    </CardStyled>
  )
}

const CardStyled = styled.section`
  position: relative;
  display: grid;
  gap: 8px;
  background-image: linear-gradient(60deg, #fff3f2, white);
  padding: 22px 20px 8px;
  border-radius: 15px;
  box-shadow: 0 10px 10px #0002;
  width: 310px;
`

const ImageStyled = styled.img`
  height: 140px;
  width: 245px;
  border: 5px solid #f7f5e6;
`
const ProductListStyled = styled.ul`
  list-style-type: none;
  margin-top: 9px;
`

const ProductListItemStyled = styled.li`
  font-size: 16px;
  margin-left: 2px;
  margin-top: 3px;
`

const InstructionStyled = styled.h5`
  width: 90px;
  height: 21px;
  margin-left: 5px;
  margin-top: 6px;
`

const DivStyled = styled.div`
  margin-left: 5px;
`
