import React from 'react'
import styled from 'styled-components'
import Product from './Product'

export default function ProductList() {
  const products = [
    'images/rrr.jpg',
    'images/kar.jpg',
    'images/nn.jpg',
    'images/bbb.jpg',
    'images/cam.jpg',
    'images/pepp.jpg',
    'images/kk.jpg',
    'images/pappp.jpg',
    'images/lll.jpeg',
    'images/tomat.jpg',
    'images/zzz.jpg',
    'images/mm.jpeg',
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
  background-color: #afc7bb;
  border-radius: 10%;
  padding: 20px 10px;
  box-shadow: 0 0 9px #0009;
  width: 330px;
`
