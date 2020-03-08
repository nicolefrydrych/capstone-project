import React from 'react'
import styled from 'styled-components'
import { useToggle } from 'react-hooks-lib'

export default function Product({ productImage, productName, onProductClick }) {
  const { on, toggle } = useToggle(false)

  return (
    <ImageStyled
      onClick={() => handleProductClick(productName)}
      src={productImage}
      active={on}
    ></ImageStyled>
  )
  function handleProductClick(name) {
    onProductClick(name)
    toggle()
  }
}

const ImageStyled = styled.img`
  width: 60px;
  height: 60px;
  border: ${props => (props.active ? '4px' : '2px')} solid
    ${props => (props.active ? '#575555' : 'white')};
  border-radius: 10%;
`
