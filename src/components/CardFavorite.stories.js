import React from 'react'
import CardFavorite from './CardFavorite'
import { action } from '@storybook/addon-actions'

export default {
  title: 'pages/CardFavorite',
  component: CardFavorite,
}

const styledCardFavorite = {
  position: 'absolute',
  left: '30%',
  top: '3%',
  transform: 'translate("-50", "-50")',
}

export const standardCardFavorite = () => (
  <div style={styledCardFavorite}>
    <CardFavorite
      id="Test"
      name="Title"
      image="images/defaultImage.jpg"
      instruction="Test Instruction"
      products={['Product1', 'Product2']}
      isBookmarked="true"
      handleBookmarkClick={action('handleBookmarkClick')}
    ></CardFavorite>
  </div>
)
