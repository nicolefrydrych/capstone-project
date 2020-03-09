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
  top: '3%',
  transform: 'translate("-50", "-50")',
}

export const standardCard = () => (
  <div style={styledCard}>
    <Card
      id="Test"
      name="Title"
      image="https://i.picsum.photos/id/1037/200/200.jpg"
      instruction="Test Instruction"
      products={['Product1', 'Product2']}
      isBookmarked="true"
      handleBookmarkClick={action('handleBookmarkClick')}
    ></Card>
  </div>
)
