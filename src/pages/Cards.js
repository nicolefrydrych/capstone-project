import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import ProductList from '../components/ProductList'
import Header from '../components/Header'

export default function Cards({ recipes, onBookmarkClick }) {
  return (
    <>
      <Header headerName="Choose a meal"></Header>
      <Containerall>
        <ProductList />
        <Container>
          {recipes.map(recipe => (
            <Card
              key={recipe.id}
              {...recipe}
              handleBookmarkClick={onBookmarkClick}
            ></Card>
          ))}
        </Container>
      </Containerall>
    </>
  )
}

const Container = styled.div`
  display: grid;
  gap: 35px;
  scroll-behavior: smooth;
  padding: 40px 60px;
`

const Containerall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
