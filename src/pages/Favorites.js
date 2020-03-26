import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import FavoriteCard from '../components/FavoriteCard'

export default function Favorites({ recipes, onBookmarkClick }) {
  const filteredRecipes = recipes.filter(recipe => recipe.isBookmarked === true)

  return (
    <>
      <Header headerName="Favorite recipes"></Header>
      <ScrollContainerAll>
        <FavoriteList>
          {filteredRecipes.length !== 0 ? (
            filteredRecipes.map(recipe => (
              <FavoriteCard
                key={recipe.id}
                {...recipe}
                onBookmarkClick={onBookmarkClick}
              />
            ))
          ) : (
            <TextStyled>Choose your favorites</TextStyled>
          )}
        </FavoriteList>
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

const FavoriteList = styled.section`
  display: grid;
  gap: 50px;
  scroll-behavior: smooth;
  padding: 12px 60px 40px;
`

const TextStyled = styled.h1`
  text-align: center;
  color: #737271;
`
