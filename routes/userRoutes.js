const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router();
const User = require('../models/User')

// @ GET /users
// Retreives all users
router.get('/', async (req,res)=>{
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
})

/*
We don't want to store our passwords in plain text. If someone gets into our database, that would be trouble.
That's why we use a hashing function and salts using the bcrypt package.
Hashing the same password will give us the same random string, but the salt is always unique, so
hashing the salt with the original password gives us a unique hashing
*/

// @ POST /users
// Adds a new user
router.post('/', async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        const new_user = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        })

        new_user.save()
                .then( user => res.status(201).json(user))
    }catch(error){
        console.log(error);
        res.status(500).send("error")
    }
})

// @POST /users/login
// Checks whether entered credentials match 
router.post('/login', async (req,res)=>{
    const user = await User.findOne({email:req.body.email});

    if(!user)
        return res.status(400).send(null)

    try{
        if(await bcrypt.compare(req.body.password, user.password)) //compare encrypted passwords
             res.status(200).send(user)
        else
            res.status(401).send(null)
    }catch(error){
        res.status(500).json(error)
    }
})

// @PUT /users/addCard
// Adds new card id to user's yourCards array
router.put('/saveCard', async (req,res)=>{
    try{
        const userID = req.body.userID;
        const user = await User.findById(userID)
        const savedCardsUpdated = [...user.savedCards, req.body.cardID];

        const updated_user = await User.findByIdAndUpdate(userID, {savedCards : savedCardsUpdated}, {new : true}) //this method only updates the field you specify
        return res.status(200).json(updated_user)
    }catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;