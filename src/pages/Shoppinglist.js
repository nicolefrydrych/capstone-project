import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'

export default function Shoppinglist() {
  const products = [
    { name: 'rice', image: 'images/rice.jpg' },
    { name: 'potatoes', image: 'images/potatoes.jpg' },
    { name: 'pasta', image: 'images/pasta.jpg' },
    { name: 'broccoli', image: 'images/broccoli.jpg' },
    { name: 'mushrooms', image: 'images/mushrooms.jpg' },
    { name: 'spices', image: 'images/spices.jpg' },
    { name: 'coconut', image: 'images/coconut.jpg' },
    { name: 'paprika', image: 'images/paprika.jpg' },
    { name: 'lentils', image: 'images/lentils.jpeg' },
    { name: 'tomatoes', image: 'images/tomatoes.jpg' },
    { name: 'zucchini', image: 'images/zucchini.jpg' },
    { name: 'carrots', image: 'images/carrots.jpeg' },
  ]
  return (
    <>
      <Header headerName="Shoppinglist"></Header>
      <PageStyled>
        {products.map(product => (
          <ImageStyled src={product.image}></ImageStyled>
        ))}
        <FormStyled>
          <InputStyled type="text" name="name" value="" />
          <input type="submit" value="send" />
        </FormStyled>
      </PageStyled>
    </>
  )
}

const PageStyled = styled.div`
  display: grid;
  gap: 15px;
  flex-direction: column;
  margin: 110px 0 40px;
  margin-left: 40px;
`

const ImageStyled = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10%;
  border: 5px solid #f7f5e6;
`
const FormStyled = styled.form`
  text-align: center;
`

const InputStyled = styled.input`
  width: 180px;
  height: 40px;
  border: 5px solid #f7f5e6;
  margin-top: 20px;
`
