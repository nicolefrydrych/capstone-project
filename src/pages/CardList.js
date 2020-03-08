import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import ProductList from '../components/ProductList'
import Header from '../components/Header'

export default function Cardlist({ recipes, onBookmarkClick }) {
  const [selectedProducts, setselectedProducts] = useState([])
  console.log(selectedProducts)
  return (
    <>
      <Header headerName="Choose a meal"></Header>
      <ScrollContainerAll>
        <ProductList onProductClick={handleProductClick} />
        <CardContainer>
          {recipes.map(recipe => (
            <Card
              key={recipe.id}
              {...recipe}
              handleBookmarkClick={onBookmarkClick}
            ></Card>
          ))}
        </CardContainer>
      </ScrollContainerAll>
    </>
  )

  function handleProductClick(clickedProduct) {
    const index = selectedProducts.findIndex(
      selectedProduct => selectedProduct === clickedProduct
    )
    selectedProducts.includes(clickedProduct)
      ? setselectedProducts([
          ...selectedProducts.slice(0, index),
          ...selectedProducts.slice(index + 1),
        ])
      : setselectedProducts([...selectedProducts, clickedProduct])
  }
}

const CardContainer = styled.div`
  display: grid;
  gap: 35px;
  scroll-behavior: smooth;
  padding: 40px 60px;
`

const ScrollContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
