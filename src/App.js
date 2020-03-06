import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Cards from './pages/Cards'
import Navigation from './Navigation'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
]

export default function App() {
  const [recipes, setRecipes] = useState(getFromLocal('recipes') || recipesData)

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

  useEffect(() => {
    saveToLocal('recipes', recipes)
  })

  return (
    <Router>
      <Header headerName="Vegan Cuisine" />
      <AppGrid>
        <ContentCointainer>
          <Switch>
            <Route exact path="/">
              <Cards recipes={recipes} onBookmarkClick={handleBookmarkClick} />
            </Route>
            <Route path="/favourites">
              <section>Favourites</section>
            </Route>
          </Switch>
        </ContentCointainer>
        <Navigation />
      </AppGrid>
    </Router>
  )
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 55px;

  height: 100vh;
`
const ContentCointainer = styled.div`
  overflow: auto;
`
