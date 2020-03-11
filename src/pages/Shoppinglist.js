import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'

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
      <Header headerName="Shoppinglist"></Header>
      <PageStyled>
        <SelectStyled onChange={handleChange}>
          <option value="">select a product</option>
          {productToShoppinglist.map(product => (
            <option value={product.name}>{product.name}</option>
          ))}
        </SelectStyled>
        {productToShoppinglist
          .filter(product => product.isSelected === true)
          .map(product => (
            <DivStyled>
              <SpanStyled onClick={() => onDelete(product.name)}>x</SpanStyled>
              <ImageStyled src={product.image}></ImageStyled>
            </DivStyled>
          ))}
      </PageStyled>
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

    console.log(index)
    setProductToShoppinglist([
      ...productToShoppinglist.slice(0, index),
      updatedProduct,
      ...productToShoppinglist.slice(index + 1),
    ])
    event.target.value = ''
  }
  function getFromLocal(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

const PageStyled = styled.div`
  display: grid;
  gap: 15px;
  flex-direction: column;
  margin: 110px 0 40px;
  margin-left: 50px;
`
const ImageStyled = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10%;
  border: 5px solid #f7f5e6;
`

const SpanStyled = styled.span`
  position: absolute;
  left: -10px;
  top: -14px;
  color: gray;
`

const DivStyled = styled.div`
  position: relative;
`

const SelectStyled = styled.select`
  background-color: #f9f9f9;
  width: 315px;
  box-shadow: 0px 5px 16px -3px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  font-size: 16px;
  color: gray;
  margin-bottom: 15px;
`

{
  /* <FormStyled onSubmit={handleSubmit}>
<InputStyled type="text" name="name" />
<button>send</button>
</FormStyled> */
}
