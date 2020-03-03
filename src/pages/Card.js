import React from 'react'
import styled from 'styled-components'
import { useToggle } from 'react-hooks-lib'
import Bookmark from './Bookmark'

export default function Card({ recipe }) {
  const { on, toggle } = useToggle(false)

  return (
    <CardStyled>
      <Bookmark />
      <h1>{recipe.name}</h1>
      <ul>
        {recipe.products.map(product => (
          <li> {product} </li>
        ))}
      </ul>
      <ImageStyled src={recipe.image} />

      <h4 onClick={toggle}> Instruction</h4>
      {on && <div>{recipe.instruction}</div>}
    </CardStyled>
  )
}

const CardStyled = styled.section`
  position: relative;
  background: white;
  padding: 0px 30px 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`

const ImageStyled = styled.img`
  height: 100px;
  width: 220px;
`
