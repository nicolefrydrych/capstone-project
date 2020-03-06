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
      {products.map((product, index) => (
        <Product key={index} link={product}></Product>
      ))}
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 60px 60px 60px;
  grid-template-rows: 60px 60px 60px;
  gap: 17px;
  justify-content: center;
  justify-items: center;
  background-color: #a2ba1c;
  border-radius: 10%;
  padding: 20px 10px;
  box-shadow: 0 0 9px #0009;
  width: 330px;
`
