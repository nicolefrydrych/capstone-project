import React from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function Cards({ recipes }) {
  return (
    <CardContainer>
      {recipes.map(recipe => (
        <Card recipe={recipe}></Card>
      ))}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  background-color: rgb(254, 244, 157);
  display: grid;
  gap: 35px;
  scroll-behavior: smooth;
  padding: 20px 20px;
  padding: 40px 60px;
`
