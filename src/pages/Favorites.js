import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components'

export default function Favorites({ recipes }) {
  const { on, toggle } = useToggle(false)

  const filteredRecipes = recipes.filter(recipe => recipe.isBookmarked === true)

  return (
    <>
      <Header headerName="Favorites"></Header>
      <ScrollContainerAll>
        <CardContainer>
          {filteredRecipes.length !== 0 ? (
            filteredRecipes.map(recipe => (
              <CardStyled>
                <h1>{recipe.name}</h1>

                <ProductListStyled>
                  {recipe.products.map(product => (
                    <ProductListItemStyled>{product}</ProductListItemStyled>
                  ))}
                </ProductListStyled>
                <ImageStyled src={recipe.image} />
                <InstructionStyled onClick={toggle}>
                  Instruction
                </InstructionStyled>
                {on && <DivStyled>{recipe.instruction}</DivStyled>}
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

const CardContainer = styled.div`
  display: grid;
  gap: 35px;
  scroll-behavior: smooth;
  padding: 12px 60px 40px;
`

const ScrollContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

const CardStyled = styled.section`
  position: relative;
  display: grid;
  gap: 15px;
  background-image: linear-gradient(60deg, #fff3f2, white);
  padding: 20px 20px;
  border-radius: 15px;
  box-shadow: 0 10px 10px #0002;
  width: 290px;
`
const TextStyled = styled.h1`
  text-align: center;
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
`

const DivStyled = styled.div`
  font-size: 16px;
`
