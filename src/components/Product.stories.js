import React from 'react'
import Product from './Product'
import ProductList from './ProductList'
import { action } from '@storybook/addon-actions'

export default {
  title: 'pages/Product',
  component: Product,
}

const styledProduct = {
  position: 'absolute',
  left: '45%',
  top: '40%',
  transform: 'translate("-50", "-50")',
}

const styledProductList = {
  position: 'absolute',
  left: '30%',
  top: '8%',
  transform: 'translate("-50", "-50")',
  width: '300px',
}

export const standardProduct = () => (
  <div style={styledProduct}>
    <Product
      onClick={action('productToggle')}
      active="true"
      link="images/pappp.jpg"
    ></Product>
  </div>
)

export const standardProductList = () => (
  <div style={styledProductList}>
    <ProductList onClick={action('productToggle')} active="true"></ProductList>
  </div>
)
