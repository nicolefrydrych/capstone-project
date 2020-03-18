const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  instruction: {
    type: String,
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    required: true,
  },
})

module.exports = mongoose.model('recipes', recipeSchema)
