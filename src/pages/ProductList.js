import React from 'react'
import styled from 'styled-components'
import Product from './Product'

export default function ProductList() {
  const products = [
    'images/rice.png',
    'images/potatoes.png',
    'images/pasta.png',
    'images/broccoli.png',
    'images/mushrooms.png',
    'images/spices.jpg',
    'images/coconut.png',
    'images/paprika.png',
    'images/red_lentils.png',
    'images/tomatoes.jpg',
    'images/zucchini.png',
    'images/carrots.png',
  ]

  return (
    <ProductContainer>
      {products.map(product => (
        <Product link={product}></Product>
      ))}
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 65px 65px 65px;
  grid-template-rows: 65px 65px 65px 65px;
  gap: 20px;
  justify-content: center;
  justify-items: center;
  border: 5px solid orange;
  background-color: coral;
  border-radius: 10%;
  padding: 20px 0;
  box-shadow: 0 0 9px #0009;
`
