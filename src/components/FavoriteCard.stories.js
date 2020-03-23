import React from 'react'
import FavoriteCard from './FavoriteCard'
import { action } from '@storybook/addon-actions'

export default {
  title: 'pages/FavoriteCard',
  component: FavoriteCard,
}

const styledFavoriteCard = {
  position: 'absolute',
  left: '30%',
  top: '3%',
  transform: 'translate("-50", "-50")',
}

export const standardFavoriteCard = () => (
  <div style={styledFavoriteCard}>
    <FavoriteCard
      id="Test"
      name="Title"
      image="images/defaultImage.jpg"
      instruction="Test Instruction"
      products={['Product1', 'Product2']}
      isBookmarked="true"
      onBookmarkClick={action('onBookmarkClick')}
    ></FavoriteCard>
  </div>
)
