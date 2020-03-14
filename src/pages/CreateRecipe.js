import React from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import styled from 'styled-components'

export default function Fridge({ addRecipe }) {
  const { register, handleSubmit } = useForm({ mode: 'onChange' })

  return (
    <>
      <Header headerName="Create a recipe"></Header>
      <CardForm id="cardForm" onSubmit={handleSubmit(handleAdd)}>
        <UlStyled>
          <LiStyled>
            <LabelStyled htmlFor="name">Recipe name</LabelStyled>
            <InputStyled
              maxLength="25"
              ref={register()}
              autoFocus
              type="text"
              name="name"
              id="name"
            />
            <SpanStyled>Enter recipe name</SpanStyled>
          </LiStyled>
          <LiStyled>
            <LabelStyled htmlFor="instruction">Instruction</LabelStyled>
            <InputStyled
              maxLength="120"
              ref={register()}
              height="50"
              type="text"
              name="instruction"
              id="instruction"
            />
            <SpanStyled>Enter the instruction</SpanStyled>
          </LiStyled>
          <LiStyled>
            <LabelStyled htmlFor="products">Products</LabelStyled>
            <InputStyled
              maxLength="120"
              ref={register()}
              height="50"
              type="text"
              name="products"
              id="instruction"
            />
            <SpanStyled>Enter the products you need</SpanStyled>
          </LiStyled>
        </UlStyled>
        <StyledButtonDiv>
          <ButtonStyled type="submit">Submit</ButtonStyled>
          <ButtonStyled type="button" onClick={deleteInputFields}>
            Cancel
          </ButtonStyled>
        </StyledButtonDiv>
      </CardForm>
    </>
  )

  function handleAdd(data) {
    addRecipe(data)
    deleteInputFields()
  }

  function deleteInputFields() {
    document.querySelector('[name=name]').value = ''
    document.querySelector('[name=instruction]').value = ''
    document.querySelector('[name=products]').value = ''
  }
}

const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  display: block;
  outline: none;
  font-size: 16px;
  padding: 0 0 0 5px;
  background: white;
  color: gray;
  font-family: Arial;
  height: ${props => props.height || 35}px;
`

const SpanStyled = styled.span`
  background: #f2f2f2;
  display: block;
  padding: 7px;
  width: 100%;
  text-align: center;
  color: gray;
  font-family: Arial;
  font-size: 16px;
`

const LabelStyled = styled.label`
  float: left;
  box-shadow: 0px -1px 26px -8px rgba(0, 0, 0, 0.2);
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-top: -27px;
  margin-left: 17px;
  background: #ffffff;
  height: 26px;
  padding: 3px 5px;
  color: #b9b9b9;
  font-size: 14px;
  font-family: Arial;
`

const UlStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const LiStyled = styled.li`
  margin: 40px 0 5px;
  background: white;
  padding: 10px 0 0;
  border: 1px solid #dddddd;
  border-radius: 5px;
`

const CardForm = styled.form`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonStyled = styled.button`
  width: 270px;
  height: 45px;
  border: none;
  border-radius: 12px;
  background: #b8a6b3;
  font-family: monospace;
  font-size: 18px;
  text-align: center;
  color: white;
`

const StyledButtonDiv = styled.div`
  display: grid;
  gap: 20px;
  flex-direction: column;
  margin-top: 40px;
`
