import React from 'react'
import styled from 'styled-components'
import { useToggle } from 'react-hooks-lib'
import Bookmark from './Bookmark'

export default function Card({
  _id,
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
        _id={_id}
        onBookmarkClick={handleBookmarkClick}
        statusOfBookmark={isBookmarked}
      />

      <NameTextStyled>{name}</NameTextStyled>

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
          onClick={() => handleDeleteRecipe(_id)}
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
  padding: 24px 20px 12px;
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
  color: #737271;
`
const NameTextStyled = styled.h3`
  color: #737271;
`

const InstructionTextStyled = styled.h5`
  width: 90px;
  height: 21px;
  margin-left: 5px;
  margin-top: 6px;
  color: #737271;
`

const DivStyled = styled.div`
  margin-left: 5px;
  color: #6b6967;
`
const InstructionStyled = styled.div`
  font-weight: bold;
  margin-top: 10px;
  color: #6b6967;
`
const ImageBinStyled = styled.img`
  position: absolute;
  width: 30px;
  height: 26px;
  opacity: 0.3;
  bottom: 10px;
  right: 8px;
`
