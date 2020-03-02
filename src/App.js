import React from 'react'
import styled from 'styled-components'

function App() {
  const recipes = [
    {
      name: 'Roasted vegetables',
      products: ['potatoes', 'mushrooms', 'zucchini', 'paprika', 'spices'],
      image: 'https://i.picsum.photos/id/1037/200/200.jpg',
      instruction:
        'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    },
    {
      name: 'Roasted vegetables',
      products: ['potatoes', 'mushrooms', 'spices'],
      image: 'https://i.picsum.photos/id/1037/200/200.jpg',
      instruction:
        'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    },
  ]

  return (
    <CardContainer>
      {recipes.map(recipe => (
        <CardStyled>
          <BookmarkStyled />
          <h1>{recipe.name}</h1>
          <ul>
            {recipe.products.map(product => (
              <li> {product} </li>
            ))}
          </ul>
          <ImageStyled src={recipe.image} />

          <h4 onClick={toggleInstruction}> Instruction</h4>
          <ToggleText>{recipe.instruction}</ToggleText>
        </CardStyled>
      ))}
    </CardContainer>
  )

  function toggleInstruction() {}
}

export default App

const ToggleText = styled.p`
  visibility: hidden;
`

const CardContainer = styled.div`
  background-color: rgb(254, 244, 157);
  display: grid;
  gap: 35px;
  scroll-behavior: smooth;
  padding: 20px 20px;
  padding: 40px 60px;
`

const CardStyled = styled.section`
  position: relative;
  background: white;
  padding: 0px 30px 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  height: auto;
`
const BookmarkStyled = styled.button`
  height: 33px;
  padding: 0;
  outline: 0;
  border: 13px solid gray;
  border-bottom-color: white;
  position: absolute;
  right: 21px;
  top: -11px;
`
const ImageStyled = styled.img`
  height: 100px;
  width: 220px;
`
