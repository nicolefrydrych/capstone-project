export function getFromLocal(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getRecipes() {
  return fetch('http://localhost:4000/api/recipes').then(res => res.json())
}

export function postRecipes(data) {
  return fetchRecipes('POST', data)
}

function fetchRecipes(method, data, id = '') {
  return fetch('http://localhost:4000/api/recipe' + id, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
