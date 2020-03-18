import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useToggle } from 'react-hooks-lib'
import Bookmark from '../components/Bookmark'

export default function Favorites({ recipes, handleBookmarkClick }) {
  const { on, toggle } = useToggle(false)
  const filteredRecipes = recipes.filter(recipe => recipe.isBookmarked === true)

  return (
    <>
      <Header headerName="Favorite recipes"></Header>
      <ScrollContainerAll>
        <CardContainer>
          {filteredRecipes.length !== 0 ? (
            filteredRecipes.map(recipe => (
              <CardStyled key={recipe._id}>
                <Bookmark
                  _id={recipe._id}
                  onBookmarkClick={handleBookmarkClick}
                  statusOfBookmark={recipe.isBookmarked}
                />

                <NameTextStyled>{recipe.name}</NameTextStyled>

                <ImageStyled src={recipe.image || 'images/defaultImage.jpg'} />

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
                    <p>{recipe.instruction}</p>
                    <ProductListStyled>
                      <InstructionStyled>Ingredients:</InstructionStyled>
                      {recipe.products.map((product, index) => (
                        <ProductListItemStyled key={index}>
                          {product}
                        </ProductListItemStyled>
                      ))}
                    </ProductListStyled>
                  </DivStyled>
                )}
              </CardStyled>
            ))
          ) : (
            <TextStyled>Choose your favorites</TextStyled>
          )}
        </CardContainer>
      </ScrollContainerAll>
    </>
  )
}

const ScrollContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
const CardContainer = styled.div`
  display: grid;
  gap: 50px;
  scroll-behavior: smooth;
  padding: 12px 60px 40px;
`
const NameTextStyled = styled.h3`
  color: #737271;
`
const CardStyled = styled.section`
  position: relative;
  display: grid;
  gap: 8px;
  background-image: linear-gradient(60deg, #faf5ef, white);
  padding: 22px 20px 16px;
  border-radius: 15px;
  box-shadow: 0 10px 10px #0002;
  width: 310px;
`
const ImageStyled = styled.img`
  height: 140px;
  width: 260px;
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
  color: #6b6967
`
const InstructionStyled = styled.div`
  font-weight: bold;
  margin-top: 10px;
  color: #6b6967
`
const TextStyled = styled.h1`
  text-align: center;
  color: #737271;
`