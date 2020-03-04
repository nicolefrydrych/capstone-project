import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function Cards({ recipes, onBookmarkClick }) {
  return (
    <CardContainer>
      {recipes.map(recipe => (
        <Card {...recipe} handleBookmarkClick={onBookmarkClick}></Card>
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
