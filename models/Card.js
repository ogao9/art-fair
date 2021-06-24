const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//The Schema defines the shape of the document in the database
const cardSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: "Wildcard",
    },
    expertAnalysis: {
        type: Array,
        default: []
    },
    metric: {
        type: Number,
        default: 0,
    },
}, {timestamps:true});

//Create a model based on the schema; the first arg is the name of the model
//Mongoose will pluralize this name (Card -> Cards), which will be the name of the collection looked for in out DB 
const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
