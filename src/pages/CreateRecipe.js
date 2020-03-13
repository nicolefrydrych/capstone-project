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
          <InputStyled
            maxLength="25"
            ref={register()}
            autoFocus
            type="text"
            name="name"
            id="name"
            placeholder="Recipe name"
          />
        </LabelStyled>

        <LabelStyled htmlFor="instruction">
          <InputStyled
            maxLength="120"
            ref={register()}
            height="70"
            type="text"
            name="instruction"
            id="instruction"
            placeholder="Instruction"
          />
        </LabelStyled>

        <LabelStyled htmlFor="products">
          <InputStyled
            ref={register()}
            height="70"
            type="text"
            name="products"
            id="products"
            placeholder="Products"
          />
        </LabelStyled>
        <UlStyled>
          <LiStyled>
            <LabStyled htmlFor="name">Recipe name</LabStyled>
            <InputtStyled
              maxLength="25"
              ref={register()}
              autoFocus
              type="text"
              name="name"
              id="name"
            />
          </LiStyled>
          <LiStyled>
            <LabStyled htmlFor="instruction">Instruction</LabStyled>
            <InputtStyled
              maxLength="120"
              ref={register()}
              height="70"
              type="text"
              name="instruction"
              id="instruction"
            />
            <SpannStyled>Enter the instruction</SpannStyled>
          </LiStyled>
          <LiStyled>
            <LabStyled htmlFor="products">Products</LabStyled>
            <InputtStyled
              maxLength="120"
              ref={register()}
              height="70"
              type="text"
              name="instruction"
              id="instruction"
            />
            <SpannStyled>Enter the products you need</SpannStyled>
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

const InputtStyled = styled.input`
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
  padding: 0;
  background: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  height: ${props => props.height || 35}px;
`

const SpannStyled = styled.span`
  background: #ebe6e8;
  display: block;
  padding: 3px;
  width: 280px;
  text-align: center;
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`

const LabStyled = styled.label`
  display: block;
  float: left;
  margin-top: -27px;
  margin-bottom: 17px;
  background: #ffffff;
  height: 22px;
  padding: 2px 5px 2px 5px;
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
  margin-top: 30px;
  display: block;
  background: #f5f5f5;
  padding: 15px 15px 25px;
  border: 1px solid #dddddd;
  margin-bottom: 30px;
  border-radius: 10px;
`

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

const InputStyled = styled.textarea`
  width: 100%;
  height: ${props => props.height || 45}px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 18px;
  background: #fffaf4;
  box-shadow: 0px 5px 16px -3px rgba(0, 0, 0, 0.2);
  resize: none;
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
  gap: 15px;
  flex-direction: column;
  margin-top: 40px;
`
