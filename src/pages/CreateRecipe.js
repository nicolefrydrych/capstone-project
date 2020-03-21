import React from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Button from '../components/Button'
import styled from 'styled-components'

export default function CreateRecipe({ addNewRecipe }) {
  const { register, handleSubmit } = useForm({ mode: 'onChange' })

  return (
    <>
      <Header headerName="Create a recipe"></Header>
      <CardForm id="cardForm" onSubmit={handleSubmit(addRecipe)}>
        <UnorderedListStyled>
          <ListItemStyled>
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
          </ListItemStyled>
          <ListItemStyled>
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
          </ListItemStyled>
          <ListItemStyled>
            <LabelStyled htmlFor="products">Products</LabelStyled>
            <InputStyled
              maxLength="120"
              ref={register()}
              height="50"
              type="text"
              name="products"
              id="products"
            />
            <SpanStyled>Enter the products you need</SpanStyled>
          </ListItemStyled>
        </UnorderedListStyled>
        <ButtonContainer>
          <Button type="submit" buttonName="submit"></Button>
          <Button
            margin={40}
            type="button"
            buttonName="cancel"
            onClick={deleteInputFields}
          >
            Cancel
          </Button>
        </ButtonContainer>
      </CardForm>
    </>
  )

  function addRecipe(data) {
    addNewRecipe(data)
    deleteInputFields()
  }

  function deleteInputFields() {
    document.querySelector('[name=name]').value = ''
    document.querySelector('[name=instruction]').value = ''
    document.querySelector('[name=products]').value = ''
  }
}

const CardForm = styled.form`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UnorderedListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItemStyled = styled.li`
  margin-top: 40px;
  background: white;
  padding: 10px 0 0;
  border: 1px solid #dddddd;
  border-radius: 5px;
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
  padding: 3px 12px;
  color: #b9b9b9;
  font-size: 14px;
`

const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  display: block;
  outline: none;
  font-size: 16px;
  padding-left: 5px;
  background: white;
  border: 1px solid white;
  color: gray;
  height: ${props => props.height || 35}px;
`

const SpanStyled = styled.span`
  background: #f2f2f2;
  display: block;
  padding: 7px;
  text-align: center;
  color: gray;
  font-size: 16px;
`

const ButtonContainer = styled.section`
  display: grid;
  gap: 25px;
  flex-direction: column;
  margin-top: 40px;
`
