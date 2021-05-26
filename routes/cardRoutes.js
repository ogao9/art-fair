const express = require('express')
const mongoose = require('mongoose')

//Import Item Model
const Card = require('../models/Card')

//Use Express's built-in Router to handle the routes
const router = express.Router()

// @GET api/cards
// Get ALL Cards
// find returns all documents, first arg in callback is error
router.get("/", async (req,res)=>{
    const cards = await Card.find()
    return res.status(200).json(cards)
})

// @GET api/cards/id
// Get ONE Cards
router.get("/:id", async (req,res)=>{
    const card = await Card.findById(req.params.id)
    return res.status(200).json(card)
})

// @POST api/cards
// Adds a Card
// Card info comes in request body; save returns a promise
router.post("/", (req,res)=>{
    const new_card = new Card({
        title: req.body.title,
        creator: req.body.creator,
        description: req.body.description,
    })
    new_card.save()
        .then( card => res.status(200).json(new_card))
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