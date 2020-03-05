import React from 'react'
import Product from './Product'
import ProductList from './ProductList'
import { action } from '@storybook/addon-actions'

export default {
  title: 'pages/Product',
  component: Product,
}

const styles = {
  position: 'absolute',
  left: '45%',
  top: '40%',
  transform: 'translate("-50", "-50")',
}

export const standardProduct = () => (
  <div style={styles}>
    <Product
      onClick={action('productToggle')}
      active="true"
      link="images/rice.png"
    ></Product>
  </div>
)

export const standardProductList = () => (
  <div>
    <ProductList
      onClick={action('productToggle')}
      active="true"
      link="images/rice.png"
    ></ProductList>
  </div>
)
