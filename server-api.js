module.exports = function(app) {
  const Recipe = require('./models/Recipe')

  app.get('/api/recipes', (req, res) => {
    Recipe.find()
      .then(recipes => res.json(recipes))
      .catch(err => res.json(err))
  })

  app.post('/api/recipe', (req, res) => {
    Recipe.create(req.body)
      .then(() => res.json())
      .catch(err => console.log(err))
  })

  // app.patch("/api/portfolios/confirm/:id", emailController.confirmEmail);
}
