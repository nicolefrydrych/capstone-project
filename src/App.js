import React from 'react'
import Cards from './pages/Cards'

export default function App() {
  const recipes = [
    {
      id: 1,
      name: 'Roasted vegetables',
      products: ['potatoes', 'mushrooms', 'zucchini', 'paprika', 'spices'],
      image: 'https://i.picsum.photos/id/1037/200/200.jpg',
      instruction:
        'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    },
    {
      id: 2,
      name: 'Roasted potatoes and mushrooms  ',
      products: ['potatoes', 'mushrooms', 'spices'],
      image: 'https://i.picsum.photos/id/1037/200/200.jpg',
      instruction:
        'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    },
  ]

  return (
    <div>
      <Cards recipes={recipes} />
    </div>
  )
}
