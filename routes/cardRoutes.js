const express = require('express')
const mongoose = require('mongoose')

//Use Express's built-in Router to handle routes
const router = express.Router()  

//Import Models
const Card = require('../models/Card') 
const User = require('../models/User')

// @GET api/cards
// Get ALL Cards
router.get("/", async (req,res)=>{
    try{
        const allCards = await Card.find()
        return res.status(200).json(allCards)
    }catch(err){
        console.log(err)
    }
})

// @GET api/cards/featured 
// Get the featured cards
router.get("/featured", async(req,res)=>{
    try{
        const LeadExpert = await User.find({username: 'leadexpert'},'savedCards -_id')
        const array = await LeadExpert[0].savedCards
        const featuredCards = await Card.find({'_id':{$in: array}})
        return res.status(200).send(featuredCards)
    }catch(err){
        console.log(err);
    }
})

// @GET api/cards/:category
// Get the cards in the specified category
router.get("/:category", async(req,res)=>{
    try{
        const categoryCards = await Card.find({category: req.params.category});
        return res.status(200).json(categoryCards)
    }catch(err){
        console.log(err)
    }
})

// @GET api/cards/savedCards/:userID
// Get the user's saved cards
router.get("/savedCards/:userID", async(req,res)=>{
    try{
        const user = await User.findById(req.params.userID,'savedCards -_id')
        const array = await user.savedCards
        const savedCards = await Card.find({'_id':{$in: array}})
        return res.status(200).send(savedCards)
    }catch(err){
        console.log(err)
    }
    
})

// @GET api/cards/yourCards/:userID
// Get the user's submitted cards
router.get("/yourCards/:userID", async(req,res)=>{
    try{
        const user = await User.findById(req.params.userID,'yourCards -_id')
        const array = await user.yourCards
        const yourCards = await Card.find({'_id':{$in: array}})
        return res.status(200).send(yourCards)
    }catch(err){
        console.log(err)
    }
})

// @GET api/cards/one/:id
// Get one card based on ID
router.get("/one/:id", async (req,res)=>{
    try{
        const singleCard = await Card.findById(req.params.id)
        return res.status(200).json(singleCard)
    }catch(err){
        console.log(err)
    }
})

// @POST api/cards
// Creates a new Card and adds it to the DB
router.post("/", (req,res)=>{
    const newCard = new Card({
        title: req.body.title,
        creator: req.body.creator,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
    })

    newCard.save()
        .then( result => res.status(200).json(result))
        .catch( err => console.log(err))
})

// @DELETE api/cards/id
// Deletes specified card
router.delete("/:id", async (req,res)=>{
    try{
        const deletedCard = await Card.findByIdAndRemove(req.params.id);
        return res.status(200).send(deletedCard);

    }catch(err){
        console.log(err)
    }         
})


module.exports = router;