import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import { getFromLocal, saveToLocal } from '../common/services'

const products = [
  { name: 'rice', image: 'images/rice.jpg', isSelected: false },
  { name: 'potatoes', image: 'images/potatoes.jpg', isSelected: false },
  { name: 'pasta', image: 'images/pasta.jpg', isSelected: false },
  { name: 'broccoli', image: 'images/broccoli.jpg', isSelected: false },
  { name: 'mushrooms', image: 'images/mushrooms.jpg', isSelected: false },
  { name: 'spices', image: 'images/spices.jpg', isSelected: false },
  { name: 'coconutmilk', image: 'images/coconut.jpg', isSelected: false },
  { name: 'paprika', image: 'images/paprika.jpg', isSelected: false },
  { name: 'lentils', image: 'images/lentils.jpeg', isSelected: false },
  { name: 'tomatoes', image: 'images/tomatoes.jpg', isSelected: false },
  { name: 'zucchini', image: 'images/zucchini.jpg', isSelected: false },
  { name: 'carrots', image: 'images/carrots.jpeg', isSelected: false },
]
export default function Shoppinglist() {
  const [productToShoppinglist, setProductToShoppinglist] = useState(
    getFromLocal('productList') || products
  )

  useEffect(() => {
    saveToLocal('productList', productToShoppinglist)
  })

  return (
    <>
      <Header headerName="Shopping list"></Header>
      <ShoppinglistContainer data-cy="selectedProduct">
        <DropDownMenu onChange={handleChange}>
          <option value="">Select a product</option>
          {productToShoppinglist.map(product => (
            <option key={product.name} value={product.name}>
              {product.name}
            </option>
          ))}
        </DropDownMenu>
        {productToShoppinglist
          .filter(product => product.isSelected === true)
          .map(product => (
            <ProductContainer key={product.name}>
              <DeleteFeatureStyled onClick={() => onDelete(product.name)}>
                x
              </DeleteFeatureStyled>
              <ImageStyled src={product.image}></ImageStyled>
            </ProductContainer>
          ))}
      </ShoppinglistContainer>
    </>
  )

  function onDelete(name) {
    const index = productToShoppinglist.findIndex(
      product => product.name === name
    )
    const updatedProduct = {
      ...productToShoppinglist[index],
      isSelected: false,
    }

    setProductToShoppinglist([
      ...productToShoppinglist.slice(0, index),
      updatedProduct,
      ...productToShoppinglist.slice(index + 1),
    ])
  }

  function handleChange(event) {
    if (event.target.value === '') {
      return
    }

    const index = productToShoppinglist.findIndex(
      product => product.name === event.target.value
    )

    const updatedProduct = {
      ...productToShoppinglist[index],
      isSelected: true,
    }

    setProductToShoppinglist([
      ...productToShoppinglist.slice(0, index),
      updatedProduct,
      ...productToShoppinglist.slice(index + 1),
    ])
    event.target.value = ''
  }
}

const ShoppinglistContainer = styled.div`
  display: grid;
  gap: 15px;
  flex-direction: column;
  margin: 110px 50px 40px;
`

const DropDownMenu = styled.select`
  height: 50px;
  box-shadow: 0px 5px 16px -3px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
  background: white;
  font-family: 'Gill Sans';
`

const ProductContainer = styled.section`
  position: relative;
`

const DeleteFeatureStyled = styled.span`
  position: absolute;
  left: -10px;
  top: -14px;
  color: gray;
`

const ImageStyled = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10%;
  border: 5px solid #f7f5e6;
`
