const mongoose = require('mongoose')

//The Schema defines the shape of the document in the database
const cardSchema = new mongoose.Schema({
    title: String,
    creator: String,
    description: String,
    category: {
        type: String,
        default: "Indoor"
    },
    metric: {
      type: Number,
      default: 0
    },
  });

//We must create a model to use the schema
//The first argument is the name of the model -> this becomes the name of the collection in Mongo
const Card = mongoose.model('Cards', cardSchema)

module.exports = Card;
