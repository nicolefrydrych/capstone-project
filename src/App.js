import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from './common/Navigation'
import CardList from './pages/CardList'
import Favorites from './pages/Favorites'
import Food from './pages/Food'
import Shoppinglist from './pages/Shoppinglist'

const recipesData = [
  {
    id: 1,
    name: 'Roasted vegetables',
    products: ['potatoes', 'mushrooms', 'zucchini', 'paprika', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 2,
    name: 'Roasted potatoes and mushrooms  ',
    products: ['potatoes', 'mushrooms', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 3,
    name: 'Roasted potatoes ',
    products: ['potatoes'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut potatoes in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 4,
    name: 'Roasted potatoes and mushrooms',
    products: ['potatoes', 'mushrooms'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut potatoes in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 5,
    name: 'Roasted potatoes, paprika and mushrooms',
    products: ['potatoes', 'mushrooms', 'paprika'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut potatoes in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 6,
    name: 'Roasted potatoes and paprika ',
    products: ['potatoes', 'paprika'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut potatoes in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
]

export default function App() {
  const [recipes, setRecipes] = useState(getFromLocal('recipes') || recipesData)
  useEffect(() => {
    saveToLocal('recipes', recipes)
  })

  return (
    <Router>
      <AppGrid>
        <ContentCointainer>
          <Switch>
            <Route exact path="/">
              <CardList
                recipes={recipes}
                onBookmarkClick={handleBookmarkClick}
              />
            </Route>
            <Route path="/food">
              <Food />
            </Route>
            <Route path="/shoppinglist">
              <Shoppinglist />
            </Route>
            <Route path="/favorites">
              <Favorites recipes={recipes} />
            </Route>
          </Switch>
        </ContentCointainer>
        <Navigation />
      </AppGrid>
    </Router>
  )

  function getFromLocal(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  function handleBookmarkClick(id) {
    const index = recipes.findIndex(recipe => recipe.id === id)

    const updatedRecipe = {
      ...recipes[index],
      isBookmarked: !recipes[index].isBookmarked,
    }

    setRecipes([
      ...recipes.slice(0, index),
      updatedRecipe,
      ...recipes.slice(index + 1),
    ])
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 55px;
  height: 100vh;
`
const ContentCointainer = styled.div`
  overflow: auto;
`
