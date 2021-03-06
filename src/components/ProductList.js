import React from 'react'
import styled from 'styled-components'
import Product from './Product'

export default function ProductList({ onProductClick }) {
  const products = [
    { name: 'rice', image: 'images/rice.jpg' },
    { name: 'potatoes', image: 'images/potatoes.jpg' },
    { name: 'pasta', image: 'images/pasta.jpg' },
    { name: 'broccoli', image: 'images/broccoli.jpg' },
    { name: 'mushrooms', image: 'images/mushrooms.jpg' },
    { name: 'spices', image: 'images/spices.jpg' },
    { name: 'coconutmilk', image: 'images/coconut.jpg' },
    { name: 'paprika', image: 'images/paprika.jpg' },
    { name: 'lentils', image: 'images/lentils.jpeg' },
    { name: 'tomatoes', image: 'images/tomatoes.jpg' },
    { name: 'zucchini', image: 'images/zucchini.jpg' },
    { name: 'carrots', image: 'images/carrots.jpeg' },
  ]

  return (
    <ProductContainer>
      {products.map((product, index) => (
        <Product
          onProductClick={onProductClick}
          key={index}
          productImage={product.image}
          productName={product.name}
        ></Product>
      ))}
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 60px 60px 60px;
  grid-template-rows: 60px 60px 60px;
  gap: 14px;
  justify-content: center;
  justify-items: center;
  background-color: #afc7bb;
  border-radius: 10%;
  padding: 16px 16px;
  box-shadow: 0 0 6px #0002;
`
