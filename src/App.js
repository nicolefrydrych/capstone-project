import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from './common/Navigation'
import StartPage from './pages/StartPage'
import CardList from './pages/CardList'
import Favorites from './pages/Favorites'
import CreateRecipe from './pages/CreateRecipe'
import Shoppinglist from './pages/Shoppinglist'
import { getFromLocal, saveToLocal, getRecipes } from './common/services'
import recipesData from './recipes'

export default function App() {
  const [recipes, setRecipes] = useState(getFromLocal('recipes') || recipesData)

  useEffect(() => {
    saveToLocal('recipes', recipes)
  })

  // Get recipes from mongo database
  // useEffect(() => {
  // recipes === null && getRecipes().then(res => setRecipes(res))
  // })

  return (
    <Router>
      <AppGrid>
        <ContentCointainer>
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route path="/selectproducts">
              <CardList
                recipes={recipes}
                onBookmarkClick={handleBookmarkClick}
                onDeleteCard={handledeleteCard}
              />
            </Route>
            <Route path="/createarecipe">
              <CreateRecipe addData={addRecipe} />
            </Route>
            <Route path="/shoppinglist">
              <Shoppinglist />
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

  function handledeleteCard(id) {
    const index = recipes.findIndex(recipe => recipe.id === id)

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
