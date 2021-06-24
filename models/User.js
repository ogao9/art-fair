const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: ""
    },
    designInterests: {
        type: String,
        default: ""
    },
    favQuote: {
        type: String,
        default: ""
    },
    yourCards:{
        type: Array,
        default: []
    },
    savedCards:{
        type: Array,
        default: []
    },
    badges:{
        type: Array,
        default: []
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User;