import React from 'react'
import Header from './Header'
import { action } from '@storybook/addon-actions'

export default {
  title: 'pages/Header',
  component: Header,
}

const styles = {
  position: 'absolute',
  top: '30%',
  transform: 'translate("-50", "-50")',
}

export const standardHeader = () => (
  <div style={styles}>
    <Header headerName="Choose a meal"></Header>
  </div>
)
