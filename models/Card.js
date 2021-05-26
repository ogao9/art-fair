const mongoose = require('mongoose')

//The Schema defines the shape of the document in the database
const cardSchema = new mongoose.Schema({
    title: String,
    creator: String,
    description: String,
    impact: {
      type: Number,
      default: 0
    },
    starred: {
      type: Boolean,
      default: false
    }
  });

//We must create a model to use the schema
const Card = mongoose.model('CardModel', cardSchema)

module.exports = Card;
