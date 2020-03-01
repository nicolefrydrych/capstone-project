import React from 'react'

function App() {
  const recipes = [
    {
      name: 'Roasted vegetables',
      products: ['potatoes', 'mushrooms', 'zucchini', 'paprika', 'spices'],
      image: 'https://i.picsum.photos/id/1037/200/200.jpg',
      instruction:
        'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    },
    {
      name: 'Roasted vegetables',
      products: ['potatoes', 'mushrooms', 'spices'],
      image: 'https://i.picsum.photos/id/1037/200/200.jpg',
      instruction:
        'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    },
  ]

  return (
    <div>
      {recipes.map(recipe => (
        <div>
          <h1>{recipe.name}</h1>
          <ul>
            {recipe.products.map(product => (
              <li> {product} </li>
            ))}
          </ul>
          <img src={recipe.image} />
          <div>
            <h4> Instruction</h4>
            {recipe.instruction}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
