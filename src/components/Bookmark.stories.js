import React from 'react'
import Bookmark from './Bookmark'
import { action } from '@storybook/addon-actions'

export default {
  title: 'pages/Bookmark',
  component: Bookmark,
}

const styles = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate("-50", "-50")',
}

export const standardBookmark = () => (
  <div style={styles}>
    <Bookmark
      id="test"
      onBookmarkClick={action('bookmarkClick')}
      isBookmarked="true"
    />
  </div>
)
