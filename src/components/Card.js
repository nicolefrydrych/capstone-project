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
  isBookmarked,
  handleDeleteRecipe,
  handleBookmarkClick,
}) {
  const { on, toggle } = useToggle(false)

  return (
    <CardStyled>
      <Bookmark
        id={id}
        onBookmarkClick={handleBookmarkClick}
        statusOfBookmark={isBookmarked}
      />

      <h3>{name}</h3>

      <ImageStyled src={image || 'images/defaultImage.jpg'} />

      {on === false ? (
        <InstructionTextStyled onClick={toggle}>
          show more
        </InstructionTextStyled>
      ) : (
        <InstructionTextStyled onClick={toggle}>
          show less
        </InstructionTextStyled>
      )}
      {on && (
        <DivStyled>
          <p>{instruction}</p>
          <ProductListStyled>
            <InstructionStyled>Ingredients:</InstructionStyled>
            {products.map((product, index) => (
              <ProductListItemStyled key={index}>
                {product}
              </ProductListItemStyled>
            ))}
          </ProductListStyled>
        </DivStyled>
      )}
      {on === true ? (
        <ImageBinStyled
          onClick={() => handleDeleteRecipe(id)}
          src="images/bin.svg"
        />
      ) : (
        ''
      )}
    </CardStyled>
  )
}

const CardStyled = styled.section`
  position: relative;
  display: grid;
  gap: 8px;
  background-image: linear-gradient(60deg, #faf5ef, white);
  padding: 24px 20px 16px;
  border-radius: 15px;
  box-shadow: 0 10px 10px #0002;
  width: 310px;
`

const ImageStyled = styled.img`
  height: 140px;
  width: 260px;
  border: 3px solid #f7f5e6;
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

const InstructionTextStyled = styled.h5`
  width: 90px;
  height: 21px;
  margin-left: 5px;
  margin-top: 12px;
`

const DivStyled = styled.div`
  margin-left: 5px;
`
const InstructionStyled = styled.div`
  font-weight: bold;
  margin-top: 10px;
`
const ImageBinStyled = styled.img`
  position: absolute;
  width: 30px;
  height: 26px;
  opacity: 0.3;
  bottom: 16px;
  right: 12px;
`
