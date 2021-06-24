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
    const LeadExpert = await User.find({username: 'leadexpert'},'savedCards -_id')
    const array = await LeadExpert[0].savedCards
    const featuredCards = await Card.find({'_id':{$in: array}})
    return res.status(200).send(featuredCards)
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

// @GET api/cards/one/:id
// Get ONE Card based on ID
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
        expertAnalysis: req.body.expertAnalysis
    })

    newCard.save()
        .then( result => res.status(200).json(result))
        .catch( err => console.log(err))
})

// @DELETE api/cards/id
// Deletes specified card
router.delete("/:id", async (req,res)=>{
    await Card.findById(req.params.id)
                .then(card => card.remove().then(card=> res.status(200).json({deleted:true})))
                .catch(err => res.status(404).json({error: err}))
})

// @PUT api/cards/id
// Updates specified card impact
router.put("/:id", async (req,res)=>{
    await Card.findByIdAndUpdate(req.params.id, req.body)
                .then(card => res.status(200).json(card))
                .catch(err => res.status(404).json({err}))
})

module.exports = router;