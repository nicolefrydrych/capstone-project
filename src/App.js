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
      'Cut vegetables in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 2,
    name: 'Roasted potatoes and mushrooms',
    products: ['potatoes', 'mushrooms'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut vegetables in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 3,
    name: 'Roasted potatoes ',
    products: ['potatoes'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut potatoes in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 4,
    name: 'Roasted potatoes, mushrooms and spices',
    products: ['potatoes', 'mushrooms', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut vegetables in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 5,
    name: 'Roasted potatoes, paprika and mushrooms',
    products: ['potatoes', 'mushrooms', 'paprika'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut vegetables in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 6,
    name: 'Roasted potatoes and paprika',
    products: ['potatoes', 'paprika'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 7,
    name: 'Stuffed peppers',
    products: ['rice', 'lentils', 'paprika', 'carrots', 'tomatoes', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice and lentils until soft, cut carrots in small pieces. Mix everything and add tomatoes. Fill paprika with mixture and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 8,
    name: 'Stuffed peppers',
    products: ['rice', 'lentils', 'paprika', 'tomatoes', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice and lentils until soft. Mix everything and add tomatoes. Fill paprika with mixture and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 9,
    name: 'Stuffed zucchini',
    products: [
      'rice',
      'lentils',
      'mushrooms',
      'zucchini',
      'coconut milk',
      'spices',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice and lentils until soft. Mix them with coconut milk and put zucchini with the mixture in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 10,
    name: 'Stuffed zucchini',
    products: ['rice', 'lentils', 'zucchini', 'coconut milk', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice and lentils until soft. Mix them with coconut milk and put zucchini with the mixture in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 11,
    name: 'Pasta with mushrooms',
    products: ['pasta', 'mushrooms', 'broccoli', 'coconut milk', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook pasta until soft, cut mushrooms and broccoli in pieces and put everything in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 12,
    name: 'Pasta with mushrooms',
    products: ['pasta', 'mushrooms', 'coconut milk', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook pasta until soft, cut mushrooms and broccoli in pieces and put everything in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 13,
    name: 'Vegan patties with potatoes',
    products: ['potatoes', 'lentils', 'rice', 'tomatoes', 'broccoli', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 14,
    name: 'Vegan patties with potatoes',
    products: ['potatoes', 'lentils', 'rice', 'tomatoes', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 15,
    name: 'Potatoe-carrot pancakes with mixed vegetables',
    products: [
      'potatoes',
      'carrots',
      'paprika',
      'lentils',
      'zucchini',
      'spices',
      'coconut milk',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 16,
    name: 'Potatoe-carrot pancakes with mixed vegetables',
    products: [
      'potatoes',
      'carrots',
      'paprika',
      'lentils',
      'spices',
      'coconut milk',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 17,
    name: 'Potatoe-carrot pancakes with mixed vegetables',
    products: ['potatoes', 'carrots', 'paprika', 'spices', 'coconut milk'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 18,
    name: 'Rice-vegetables-mix',
    products: [
      'rice',
      'carrots',
      'paprika',
      'lentils',
      'zucchini',
      'paprikas',
      'mushrooms',
      'tomatoes',
      'coconut milk',
      'spices',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice until soft. Cook lentils, broccoli and carrots until soft an mix rice with vegetables in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 19,
    name: 'Rice-vegetables-mix',
    products: [
      'rice',
      'carrots',
      'paprika',
      'paprikas',
      'mushrooms',
      'tomatoes',
      'coconut milk',
      'spices',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice until soft. Cook lentils, broccoli and carrots until soft an mix rice with vegetables in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 20,
    name: 'Colourful pasta',
    products: [
      'pasta',
      'carrots',
      'paprika',
      'lentils',
      'zucchini',
      'mushrooms',
      'tomatoes',
      'broccoli',
      'spices',
      'coconut milk',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook pasta until soft. Mix pasta with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 21,
    name: 'Colourful pasta',
    products: [
      'pasta',
      'carrots',
      'lentils',
      'zucchini',
      'mushrooms',
      'tomatoes',
      'spices',
      'coconut milk',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook pasta until soft. Mix pasta with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 22,
    name: 'Braised vegetables with potatoes',
    products: [
      'potatoes',
      'carrots',
      'paprika',
      'lentils',
      'zucchini',
      'mushrooms',
      'tomatoes',
      'broccoli',
      'spices',
      'coconut milk',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook potatoes until soft. Mix potatoes with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 23,
    name: 'Braised vegetables with potatoes',
    products: [
      'potatoes',
      'carrots',
      'lentils',
      'zucchini',
      'tomatoes',
      'broccoli',
      'spices',
      'coconut milk',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook potatoes until soft. Mix potatoes with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 24,
    name: 'Potatoe soup',
    products: ['potatoes', 'lentils', 'spices', 'coconut milk'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook potatoes until soft. Mash potatoes, add coconutmilk and lentils. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 25,
    name: 'Potatoe-mushroom soup',
    products: ['potatoes', 'mushroom', 'spices', 'coconut milk'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook potatoes until soft. Mash potatoes and more than half of the mushrooms, add coconutmilk and mushrooms. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 26,
    name: 'Mushroom soup',
    products: ['mushroom', 'coconut milk', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Mash mushrooms and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 27,
    name: 'Carrot-lentil soup',
    products: ['carrots', 'lentils', 'coconut milk', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Mash carrots and add coconutmilk, lentils and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 28,
    name: 'Ratatouille with rice',
    products: [
      'rice',
      'mushrooms',
      'zucchini',
      'paprika',
      'tomatoes',
      'spices',
    ],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice until soft. Cut vegetables in small pieces, add spices and cook it for around 10 minutes. Serve ratatouille with rice.',
    isBookmarked: false,
  },
  {
    id: 29,
    name: 'Ratatouille with rice',
    products: ['rice', 'zucchini', 'paprika', 'tomatoes', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Cook rice until soft. Cut vegetables in small pieces, add spices and cook it for around 10 minutes. Serve ratatouille with rice.',
    isBookmarked: false,
  },
  {
    id: 30,
    name: 'Carrot soup',
    products: ['carrots', 'coconut milk', 'spices'],
    image: 'https://i.picsum.photos/id/1037/200/200.jpg',
    instruction:
      'Mash carrots and add coconutmilk and spices. Cook it for around 10 minutes.',
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
