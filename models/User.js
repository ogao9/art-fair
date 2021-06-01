const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cards:{
        type: Array,
        default: []
    }
})



const User = mongoose.model('Users', userSchema);

module.exports = User;