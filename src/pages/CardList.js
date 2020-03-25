import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import ProductList from '../components/ProductList'
import Header from '../components/Header'

export default function Cardlist({ recipes, onBookmarkClick, onDeleteCard }) {
  const [selectedProducts, setselectedProducts] = useState([])

  return (
    <>
      <Header headerName="Select products"></Header>
      <ScrollContainerAll>
        <ProductList onProductClick={handleProductClick} />
        <CardContainer>
          {recipes && selectedProducts.length > 0
            ? recipes &&
              recipes
                .filter(recipe =>
                  checkArrays(selectedProducts, recipe.products)
                )
                .map(recipe => (
                  <Card
                    key={recipe.id}
                    {...recipe}
                    onBookmarkClick={onBookmarkClick}
                    onDeleteCard={onDeleteCard}
                  ></Card>
                ))
            : recipes &&
              recipes.map(recipe => (
                <Card
                  key={recipe.id}
                  {...recipe}
                  onBookmarkClick={onBookmarkClick}
                  onDeleteCard={onDeleteCard}
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

const ScrollContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 115px;
  overflow: hidden;
`

const CardContainer = styled.section`
  display: grid;
  gap: 50px;
  scroll-behavior: smooth;
  padding: 50px 60px;
`
