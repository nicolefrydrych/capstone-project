import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Card from '../components/Card'

export default function Favorites({ recipes, onBookmarkClick }) {
  const filteredRecipes = recipes.filter(recipe => recipe.isBookmarked === true)

  return (
    <>
      <Header headerName="Favorites"></Header>
      <ScrollContainerAll>
        <CardContainer>
          {filteredRecipes.length !== 0 ? (
            filteredRecipes.map(recipe => (
              <Card
                key={recipe.id}
                {...recipe}
                handleBookmarkClick={onBookmarkClick}
              ></Card>
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

const TextStyled = styled.h1`
  text-align: center;
`
