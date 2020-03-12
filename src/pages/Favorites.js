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
const TextStyled = styled.h1`
  text-align: center;
`

const ImageStyled = styled.img`
  height: 140px;
  width: 245px;
  border: 5px solid #f7f5e6;
`
const ProductListStyled = styled.ul`
  list-style-type: none;
  margin-top: 7px;
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

const SpanStyled = styled.span`
  position: absolute;
  top: 5px;
  right: 7px;
  border: 2px solid lightgray;
  color: lightgray;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
`
