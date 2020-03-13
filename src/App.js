import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from './common/Navigation'
import CardList from './pages/CardList'
import Favorites from './pages/Favorites'
import CreateRecipe from './pages/CreateRecipe'
import ShoppingList from './pages/ShoppingList'
import recipesData from './recipes'
import { getFromLocal, saveToLocal } from './common/services'

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
                onDeleteCard={onDelete}
              />
            </Route>
            <Route path="/createarecipe">
              <CreateRecipe addRecipe={addRecipe} />
            </Route>
            <Route path="/shoppinglist">
              <ShoppingList />
            </Route>
            <Route path="/favorites">
              <Favorites
                recipes={recipes}
                onBookmarkClick={handleBookmarkClick}
              />
            </Route>
          </Switch>
        </ContentCointainer>
        <Navigation />
      </AppGrid>
    </Router>
  )

  function onDelete(name) {
    const index = recipes.findIndex(product => product.name === name)

    setRecipes([...recipes.slice(0, index), ...recipes.slice(index + 1)])
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

  function addRecipe(recipe) {
    const productsArray = recipe.products.split(', ')

    const fullRecipe = {
      ...recipe,
      image: '',
      isBookmarked: false,
      id: Math.floor(Math.random() * 10000000000 + 55),
      products: productsArray,
    }

    const newRecipe = [fullRecipe, ...recipes]
    setRecipes(newRecipe)
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
