import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import ProductList from '../components/ProductList'
import Header from '../components/Header'

export default function Cardlist({ recipes, onBookmarkClick }) {
  const [selectedProducts, setselectedProducts] = useState([])

  return (
    <>
      <Header headerName="Choose a meal"></Header>
      <ScrollContainerAll>
        <ProductList onProductClick={handleProductClick} />
        <CardContainer>
          {selectedProducts.length > 0
            ? recipes
                .filter(recipe =>
                  checkArrays(selectedProducts, recipe.products)
                )
                .map(recipe => (
                  <Card
                    key={recipe.id}
                    {...recipe}
                    handleBookmarkClick={onBookmarkClick}
                  ></Card>
                ))
            : recipes.map(recipe => (
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

  function checkArrays(firstArray, secondArray) {
    if (firstArray.length === secondArray.length) {
      return firstArray.every(product => secondArray.includes(product))
    }
  }
}

const CardContainer = styled.div`
  display: grid;
  gap: 60px;
  scroll-behavior: smooth;
  padding: 60px 60px;
`

const ScrollContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
`
