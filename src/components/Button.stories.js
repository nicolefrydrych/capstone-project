import React from 'react'
import Button from './Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'pages/Button',
  component: Button,
}

const styles = {
  position: 'absolute',
  left: '35%',
  top: '40%',
  transform: 'translate("-50", "-50")',
}

export const standardButton = () => (
  <div style={styles}>
    <Button buttonName="submit" onClick={action('buttonClick')} type="submit" />
  </div>
)
