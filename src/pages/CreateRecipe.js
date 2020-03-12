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
        <LabelStyled htmlFor="name">
          Recipe name
          <InputStyled
            ref={register()}
            autoFocus
            type="text"
            name="name"
            id="name"
          />
        </LabelStyled>

        <LabelStyled htmlFor="instruction">
          Instruction
          <InputStyled
            ref={register()}
            height="100"
            type="text"
            name="instruction"
            id="instruction"
            placeholder=""
          />
        </LabelStyled>

        <LabelStyled htmlFor="ingredients">
          Ingredients
          <InputStyled
            ref={register()}
            height="100"
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder=""
          />
        </LabelStyled>
        <StyledDiv>
          <ButtonStyled onClick={deleteInputFields}>Cancel</ButtonStyled>
          <ButtonStyled type="submit" form="cardForm">
            Submit
          </ButtonStyled>
        </StyledDiv>
      </CardForm>
    </>
  )

  function handleAdd(data) {
    addRecipe(data)
  }

  function deleteInputFields(event) {
    event.preventDefault()
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

const CardForm = styled.form`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LabelStyled = styled.label`
  width: 300px;
  margin-top: 23px;
`

const InputStyled = styled.input`
  width: 100%;
  height: ${props => props.height || 40}px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 18px;
  background: #fffaf4;
  box-shadow: 0px 5px 16px -3px rgba(0, 0, 0, 0.2);
`
const ButtonStyled = styled.button`
  width: 110px;
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
  display: flex;
  justify-content: space-between;
  width: 260px;
  margin-top: 40px;
`
