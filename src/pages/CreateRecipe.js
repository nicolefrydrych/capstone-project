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
        <StyledDiv>
          <ButtonStyled type="submit">Submit</ButtonStyled>
          <ButtonStyled onClick={deleteInputFields}>Cancel</ButtonStyled>
        </StyledDiv>
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

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   onSubmit(recipeState)
  // }

  // function handleRecipeChange(event) {
  //   setRecipeState({
  //     ...recipeState,
  //     [event.target.name]: event.target.value,
  //   })
  // }
}

const InputStyled = styled.input`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  display: block;
  outline: none;
  border: none;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  padding: 0 0 0 5px;
  background: white;
  color: gray;
  font-family: Georgia, 'Times New Roman', Times, serif;
  height: ${props => props.height || 35}px;
`

const SpanStyled = styled.span`
  background: #f2f2f2;
  display: block;
  padding: 7px;
  width: 100%;
  text-align: center;
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`

const LabelStyled = styled.label`
  display: block;
  float: left;
  box-shadow: 0px -1px 26px -3px rgba(0, 0, 0, 0.2);
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-top: -27px;
  margin-left: 17px;
  background: #ffffff;
  height: 26px;
  padding: 3px 5px;
  color: #b9b9b9;
  font-size: 14px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
`

const UlStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const LiStyled = styled.li`
  margin: 40px 0 5px;
  display: block;
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

const StyledDiv = styled.div`
  display: grid;
  gap: 20px;
  flex-direction: column;
  margin-top: 40px;
`
