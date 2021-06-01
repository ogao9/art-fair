const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')

const User = require('../models/User')

// @ GET /users
// Retreives all users
router.get('/', async (req,res)=>{
    const response = await User.find();
    return res.status(200).json(response);
})

/*
We don't want to store our passwords in plain text. If someone gets into our database, that would be trouble.
That's why we use a hashing function and salts using the bcrypt package.
Hashing the same password will give us the same random string, but the salt is always unique, so
hashing the salt with the original password gives us a unique hashing
*/

// @ POST /users
// Adds a new user to the DB
router.post('/', async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        const new_user = new User({
            username: req.body.username,
            password: hashedPassword
        })
        new_user.save()
                .then( user => res.status(201).json(user))

    }catch(error){
        console.log(error);
        res.status(500).send("error")
    }
})


// @POST /users/login
// Checks whether entered credentials match with any in DB
router.post('/login', async (req,res)=>{
    const user = await User.findOne({username:req.body.username});
    if(!user){
        return res.status(400).send('Cannot Find User')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)) //compare encrypted passwords
             res.status(200).send(user)
        else
            res.status(401).send(null)
    }catch(error){
        res.status(500).json(error)
    }
})

// @PUT /users/update
// Adds new card id to user's card array
router.put('/update', async (req,res)=>{
    const id = req.body.userID;
    try{
        const user = await User.findById(id);
        const new_cards = [...user.cards, req.body.cardID];
        //const updated_user = await User.findByIdAndUpdate(id, {...user, cards: new_cards}, {new:true})
        //this method only updates the field you specify
        const updated_user = await User.findByIdAndUpdate(id, {cards:new_cards}, {new:true})
        return res.status(200).json(updated_user)
    }catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;