import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import ProductList from './ProductList'

export default function Cards({ recipes, onBookmarkClick }) {
  return (
    <CardContainer>
      <ProductList />
      {recipes.map(recipe => (
        <Card
          key={recipe.id}
          {...recipe}
          handleBookmarkClick={onBookmarkClick}
        ></Card>
      ))}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  background-color: rgb(254, 244, 157);
  display: grid;
  gap: 35px;
  scroll-behavior: smooth;
  padding: 40px 60px;
`
