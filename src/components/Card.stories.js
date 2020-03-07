import React from 'react'
import Card from './Card'
import { action } from '@storybook/addon-actions'

export default {
  title: 'pages/Card',
  component: Card,
}

const styledCard = {
  position: 'absolute',
  left: '30%',
  top: '8%',
  transform: 'translate("-50", "-50")',
  width: '290px',
}

export const standardCard = () => (
  <div style={styledCard}>
    <Card
      name="Title"
      image="https://i.picsum.photos/id/1037/200/200.jpg"
      instruction="Test Instruction"
      products={['Product1', 'Product2']}
      onClick={action('toggleInstruction')}
      on="true"
    ></Card>
  </div>
)
