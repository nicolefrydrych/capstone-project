const recipesData = [
  {
    id: 1,
    name: 'Roasted vegetables',
    products: ['potatoes', 'mushrooms', 'zucchini', 'paprika', 'spices'],
    image: 'images/roastedVegetables.jpg',
    instruction:
      'Cut vegetables in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 2,
    name: 'Roasted potatoes and mushrooms',
    products: ['potatoes', 'mushrooms'],
    image: 'images/roastedVegetables.jpg',
    instruction:
      'Cut vegetables in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 3,
    name: 'Roasted potatoes ',
    products: ['potatoes'],
    image: 'images/roastedVegetables.jpg',
    instruction:
      'Cut potatoes in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 4,
    name: 'Roasted potatoes, mushrooms and spices',
    products: ['potatoes', 'mushrooms', 'spices'],
    image: 'images/roastedVegetables.jpg',
    instruction:
      'Cut vegetables in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 5,
    name: 'Roasted potatoes, paprika and mushrooms',
    products: ['potatoes', 'mushrooms', 'paprika'],
    image: 'images/roastedVegetables.jpg',
    instruction:
      'Cut vegetables in slices. Add spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 6,
    name: 'Roasted potatoes and paprika',
    products: ['potatoes', 'paprika'],
    image: 'images/roastedVegetables.jpg',
    instruction:
      'Cut vegetables in slices. Add some spices and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 7,
    name: 'Stuffed peppers',
    products: ['rice', 'paprika', 'carrots', 'tomatoes', 'spices'],
    image: 'images/stuffedPeppers.jpg',
    instruction:
      'Cook rice and lentils until soft, cut carrots in small pieces. Mix everything and add tomatoes. Fill paprika with mixture and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 8,
    name: 'Stuffed peppers',
    products: ['rice', 'lentils', 'paprika', 'coconutmilk', 'spices'],
    image: 'images/stuffedPeppers.jpg',
    instruction:
      'Cook rice and lentils until soft, cut carrots in small pieces. Mix everything and add tomatoes. Fill paprika with mixture and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 9,
    name: 'Stuffed peppers',
    products: ['rice', 'paprika', 'carrots', 'tomatoes', 'spices'],
    image: 'images/stuffedPeppers.jpg',
    instruction:
      'Cook rice and lentils until soft, cut carrots in small pieces. Mix everything and add tomatoes. Fill paprika with mixture and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 10,
    name: 'Stuffed peppers',
    products: ['rice', 'lentils', 'paprika', 'tomatoes', 'spices'],
    image: 'images/stuffedPeppers.jpg',
    instruction:
      'Cook rice and lentils until soft. Mix everything and add tomatoes. Fill paprika with mixture and put them in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 11,
    name: 'Stuffed zucchini',
    products: ['rice', 'mushrooms', 'zucchini', 'coconutmilk', 'spices'],
    image: 'images/stuffedZucchini.jpg',
    instruction:
      'Cook rice and lentils until soft. Mix them with coconut milk and put zucchini with the mixture in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 12,
    name: 'Stuffed zucchini',
    products: [
      'rice',
      'lentils',
      'mushrooms',
      'zucchini',
      'paprika',
      'coconutmilk',
      'spices',
    ],
    image: 'images/stuffedZucchini.jpg',
    instruction:
      'Cook rice and lentils until soft. Mix them with coconut milk and put zucchini with the mixture in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 13,
    name: 'Stuffed zucchini',
    products: ['rice', 'mushrooms', 'zucchini', 'coconutmilk', 'spices'],
    image: 'images/stuffedZucchini.jpg',
    instruction:
      'Cook rice and lentils until soft. Mix them with coconut milk and put zucchini with the mixture in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 14,
    name: 'Stuffed zucchini',
    products: ['rice', 'lentils', 'zucchini', 'coconutmilk', 'spices'],
    image: 'images/stuffedZucchini.jpg',
    instruction:
      'Cook rice and lentils until soft. Mix them with coconut milk and put zucchini with the mixture in the oven at 180° for about 45 minutes.',
    isBookmarked: false,
  },
  {
    id: 15,
    name: 'Pasta with mushrooms',
    products: ['pasta', 'mushrooms', 'broccoli', 'coconutmilk', 'spices'],
    image: 'images/pastaMushrooms.jpg',
    instruction:
      'Cook pasta until soft, cut mushrooms and broccoli in pieces and put everything in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 16,
    name: 'Pasta with mushrooms',
    products: ['pasta', 'mushrooms', 'carrots', 'coconutmilk', 'spices'],
    image: 'images/pastaMushrooms.jpg',
    instruction:
      'Cook pasta until soft, cut mushrooms and broccoli in pieces and put everything in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 17,
    name: 'Pasta with mushrooms',
    products: ['pasta', 'mushrooms', 'coconutmilk', 'spices'],
    image: 'images/pastaMushrooms.jpg',
    instruction:
      'Cook pasta until soft, cut mushrooms and broccoli in pieces and put everything in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 18,
    name: 'Vegan patties with potatoes',
    products: ['potatoes', 'lentils', 'rice', 'tomatoes', 'broccoli', 'spices'],
    image: 'images/patties.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 19,
    name: 'Vegan patties with potatoes',
    products: ['potatoes', 'lentils', 'rice', 'tomatoes', 'carrots', 'spices'],
    image: 'images/patties.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 20,
    name: 'Vegan patties with potatoes',
    products: ['potatoes', 'lentils', 'rice', 'tomatoes', 'spices'],
    image: 'images/patties.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 21,
    name: 'Potatoe-carrot pancakes with mixed vegetables',
    products: [
      'potatoes',
      'carrots',
      'lentils',
      'zucchini',
      'spices',
      'coconutmilk',
    ],
    image: 'images/potatoePancakes.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 22,
    name: 'Potatoe-carrot pancakes with mixed vegetables',
    products: ['potatoes', 'carrots', 'paprika', 'spices', 'tomatoes'],
    image: 'images/potatoePancakes.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 23,
    name: 'Potatoe-carrot pancakes with mixed vegetables',
    products: ['potatoes', 'carrots', 'paprika', 'lentils', 'spices'],
    image: 'images/potatoePancakes.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 24,
    name: 'Potatoe-carrot pancakes with mixed vegetables',
    products: ['potatoes', 'carrots', 'paprika', 'spices', 'coconutmilk'],
    image: 'images/potatoePancakes.jpg',
    instruction:
      'Cook rice, potatoes and lentils until soft. Mix rice, lentils and add spices and form burger patties. Roast them in a pan. Serve patties wtih potatoes and vegetables.',
    isBookmarked: false,
  },
  {
    id: 25,
    name: 'Rice vegetables mix',
    products: [
      'rice',
      'carrots',
      'broccoli',
      'lentils',
      'coconutmilk',
      'spices',
    ],
    image: 'images/riceVegetable.jpg',
    instruction:
      'Cook rice until soft. Cook lentils and carrots until soft an mix rice with vegetables in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 26,
    name: 'Rice vegetables mix',
    products: ['rice', 'carrots', 'paprika', 'mushrooms', 'tomatoes', 'spices'],
    image: 'images/riceVegetable.jpg',
    instruction:
      'Cook rice until soft. Cook lentils and carrots until soft an mix rice with vegetables in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 27,
    name: 'Rice vegetables mix',
    products: ['rice', 'paprika', 'mushrooms', 'tomatoes', 'spices'],
    image: 'images/riceVegetable.jpg',
    instruction:
      'Cook rice until soft. Cook carrots until soft an mix rice with vegetables in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 28,
    name: 'Rice vegetables mix',
    products: ['rice', 'mushrooms', 'tomatoes', 'broccoli', 'spices'],
    image: 'images/riceVegetable.jpg',
    instruction:
      'Cook rice until soft. Cook carrots until soft an mix rice with vegetables in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 29,
    name: 'Rice vegetables mix',
    products: ['rice', 'carrots', 'lentils', 'coconutmilk', 'spices'],
    image: 'images/riceVegetable.jpg',
    instruction:
      'Cook rice until soft. Cook lentils, broccoli and carrots until soft an mix rice with vegetables in a pan. Add coconut milk and spices and cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 30,
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
      'coconutmilk',
    ],
    image: 'images/pastaVegetable.jpg',
    instruction:
      'Cook pasta until soft. Mix pasta with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 31,
    name: 'Colourful pasta',
    products: ['pasta', 'carrots', 'tomatoes', 'broccoli', 'spices'],
    image: 'images/pastaVegetable.jpg',
    instruction:
      'Cook pasta until soft. Mix pasta with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 32,
    name: 'Colourful pasta',
    products: ['pasta', 'carrots', 'lentils', 'zucchini', 'tomatoes', 'spices'],
    image: 'images/pastaVegetable.jpg',
    instruction:
      'Cook pasta until soft. Mix pasta with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 33,
    name: 'Colourful pasta',
    products: ['pasta', 'carrots', 'zucchini', 'spices', 'coconutmilk'],
    image: 'images/pastaVegetable.jpg',
    instruction:
      'Cook pasta until soft. Mix pasta with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 34,
    name: 'Colourful pasta',
    products: [
      'pasta',
      'carrots',
      'paprika',
      'tomatoes',
      'spices',
      'coconutmilk',
    ],
    image: 'images/pastaVegetable.jpg',
    instruction:
      'Cook pasta until soft. Mix pasta with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 35,
    name: 'Colourful pasta',
    products: ['pasta', 'carrots', 'paprika', 'tomatoes', 'spices'],
    image: 'images/pastaVegetable.jpg',
    instruction:
      'Cook pasta until soft. Mix pasta with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 36,
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
      'coconutmilk',
    ],
    image: 'images/potatoVegetable.jpeg',
    instruction:
      'Cook potatoes until soft. Mix potatoes with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 37,
    name: 'Braised vegetables with potatoes',
    products: ['potatoes', 'broccoli', 'zucchini', 'spices', 'coconutmilk'],
    image: 'images/potatoVegetable.jpeg',
    instruction:
      'Cook potatoes until soft. Mix potatoes with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 38,
    name: 'Braised vegetables with potatoes',
    products: [
      'potatoes',
      'carrots',
      'paprika',
      'tomatoes',
      'zucchini',
      'spices',
    ],
    image: 'images/potatoVegetable.jpeg',
    instruction:
      'Cook potatoes until soft. Mix potatoes with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 39,
    name: 'Braised vegetables with potatoes',
    products: [
      'potatoes',
      'carrots',
      'paprika',
      'zucchini',
      'spices',
      'coconutmilk',
    ],
    image: 'images/potatoVegetable.jpeg',
    instruction:
      'Cook potatoes until soft. Mix potatoes with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 40,
    name: 'Braised vegetables with potatoes',
    products: [
      'potatoes',
      'carrots',
      'zucchini',
      'tomatoes',
      'broccoli',
      'spices',
    ],
    image: 'images/potatoVegetable.jpeg',
    instruction:
      'Cook potatoes until soft. Mix potatoes with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 41,
    name: 'Braised vegetables with potatoes',
    products: ['potatoes', 'lentils', 'broccoli', 'spices', 'coconutmilk'],
    image: 'images/potatoVegetable.jpeg',
    instruction:
      'Cook potatoes until soft. Mix potatoes with vegetables in a pan and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 42,
    name: 'Potatoe soup',
    products: ['potatoes', 'lentils', 'spices', 'coconutmilk'],
    image: 'images/potatoeSoup.jpg',
    instruction:
      'Cook potatoes until soft. Mash potatoes, add coconutmilk and lentils. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 43,
    name: 'Potatoe soup',
    products: ['potatoes', 'spices', 'coconutmilk'],
    image: 'images/potatoeSoup.jpg',
    instruction:
      'Cook potatoes until soft. Mash potatoes, add coconutmilk and lentils. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 44,
    name: 'Potatoe-mushroom soup',
    products: ['potatoes', 'mushrooms', 'spices', 'coconutmilk'],
    image: 'images/potatoeMushroomSoup.jpg',
    instruction:
      'Cook potatoes until soft. Mash potatoes and more than half of the mushrooms, add coconutmilk and mushrooms. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 45,
    name: 'Potatoe-mushroom soup',
    products: ['potatoes', 'mushrooms', 'carrots', 'spices', 'coconutmilk'],
    image: 'images/potatoeMushroomSoup.jpg',
    instruction:
      'Cook potatoes until soft. Mash potatoes and more than half of the mushrooms, add coconutmilk and mushrooms. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 46,
    name: 'Mushroom soup',
    products: ['mushrooms', 'coconutmilk', 'spices'],
    image: 'images/mushroomSoup.jpg',
    instruction:
      'Mash mushrooms and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 47,
    name: 'Carrot-lentil soup',
    products: ['carrots', 'lentils', 'coconutmilk', 'spices'],
    image: 'images/carrotLentilSoup.jpg',
    instruction:
      'Mash carrots and add coconutmilk, lentils and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 48,
    name: 'Ratatouille with rice',
    products: [
      'rice',
      'mushrooms',
      'zucchini',
      'paprika',
      'tomatoes',
      'spices',
    ],
    image: 'images/ratatouilleRice.jpg',
    instruction:
      'Cook rice until soft. Cut vegetables in small pieces, add spices and cook it for around 10 minutes. Serve ratatouille with rice.',
    isBookmarked: false,
  },
  {
    id: 49,
    name: 'Ratatouille with rice',
    products: ['rice', 'mushrooms', 'carrots', 'paprika', 'tomatoes', 'spices'],
    image: 'images/ratatouilleRice.jpg',
    instruction:
      'Cook rice until soft. Cut vegetables in small pieces, add spices and cook it for around 10 minutes. Serve ratatouille with rice.',
    isBookmarked: false,
  },
  {
    id: 50,
    name: 'Ratatouille with rice',
    products: ['rice', 'zucchini', 'paprika', 'tomatoes', 'spices'],
    image: 'images/ratatouilleRice.jpg',
    instruction:
      'Cook rice until soft. Cut vegetables in small pieces, add spices and cook it for around 10 minutes. Serve ratatouille with rice.',
    isBookmarked: false,
  },
  {
    id: 51,
    name: 'Ratatouille with rice',
    products: ['rice', 'carrots', 'paprika', 'tomatoes', 'spices'],
    image: 'images/ratatouilleRice.jpg',
    instruction:
      'Cook rice until soft. Cut vegetables in small pieces, add spices and cook it for around 10 minutes. Serve ratatouille with rice.',
    isBookmarked: false,
  },
  {
    id: 52,
    name: 'Carrot soup',
    products: ['carrots', 'coconutmilk', 'spices'],
    image: 'images/carrotSoup.jpg',
    instruction:
      'Mash carrots and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 53,
    name: 'Tomatoe soup',
    products: ['tomatoes', 'coconutmilk', 'spices'],
    image: 'images/tomatoeSoup.jpeg',
    instruction:
      'Mash carrots and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
  {
    id: 54,
    name: 'Tomatoe soup',
    products: ['tomatoes', 'lentils', 'coconutmilk', 'spices'],
    image: 'images/tomatoeSoup.jpeg',
    instruction:
      'Mash carrots and add coconutmilk and spices. Cook it for around 10 minutes.',
    isBookmarked: false,
  },
]

export default recipesData
