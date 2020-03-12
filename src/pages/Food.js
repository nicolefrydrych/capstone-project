import React from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import styled from 'styled-components'

export default function Fridge({ addRecipe }) {
  const { register, handleSubmit } = useForm({ mode: 'onChange' })
  return (
    <>
      <Header headerName="Food"></Header>
      <CardForm id="cardForm" onSubmit={handleSubmit(handleAdd)}>
        <LabelStyled htmlFor="title">
          Recipe name
          <LabelInput
            ref={register()}
            autoFocus
            type="text"
            name="name"
            id="name"
          />
        </LabelStyled>

        <LabelStyled htmlFor="borrower">
          Image
          <LabelInput
            ref={register()}
            img={'images/roastedVegetables.jpg'}
            name="image"
            id="image"
          />
        </LabelStyled>

        <LabelStyled htmlFor="contact">
          Instruction
          <LabelInput
            ref={register()}
            height="100"
            type="text"
            name="instruction"
            id="instruction"
            placeholder=""
          />
        </LabelStyled>

        <LabelStyled htmlFor="borrowdate">
          Ingredients
          <LabelInput
            ref={register()}
            height="100"
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder=""
          />
        </LabelStyled>
        <StyledDiv>
          <StyledButton onClick={deleteInputFields}>Cancel</StyledButton>
          <StyledButton type="submit" form="cardForm">
            Submit
          </StyledButton>
        </StyledDiv>
      </CardForm>
    </>
  )

  function deleteInputFields(event) {
    event.preventDefault()
  }

  function handleAdd(data) {
    addRecipe(data)
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

const LabelInput = styled.input`
  width: 100%;
  height: ${props => props.height || 40}px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 18px;
`
const StyledButton = styled.button`
  width: 110px;
  height: 45px;
  border: none;
  border-radius: 12px;
  background: #b8a6b3;
  font-family: monospace;
  font-size: 18px;
  text-align: center;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 260px;
  margin-top: 40px;
`
