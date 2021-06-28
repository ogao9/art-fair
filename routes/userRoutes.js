const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();
const User = require("../models/User");

// @ GET /users
// Returns an array of all user objects
router.get("/", async (req, res) => {
    try{
        const allUsers = await User.find();
        return res.status(200).json(allUsers);
    }catch(err){
        console.log(err);
    }
});

// @ POST /users
// Add a new user
router.post("/", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const new_user = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
        });

        new_user.save().then((user) => res.status(201).json(user));
    } catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
});

// @POST /users/login
// Check login credentials
router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send(null);

    try {
        if (await bcrypt.compare(req.body.password, user.password))
            res.status(200).send(user);
        else res.status(401).send(null);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// @PUT /users/saveCard
// Add specified card to user's savedCards array
router.put("/saveCard", async (req, res) => {
    try {
        const userID = req.body.userID;
        const user = await User.findById(userID);
        const savedCardsUpdated = [...user.savedCards, req.body.cardID];

        const updated_user = await User.findByIdAndUpdate(
            userID,
            { savedCards: savedCardsUpdated },
            { new: true }
        ); //this method  updates the field you specify
        return res.status(200).json(updated_user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// @PUT /users/removeSavedCard
// Remove specified card from savedCards array
router.put("/removeSavedCard", async (req, res) => {
    try {
        const user = await User.findById(req.body.userID);
        const savedCardsUpdated = user.savedCards.remove(req.body.cardID);

        const updated_user = await User.findByIdAndUpdate(
            req.body.userID,
            { savedCards: savedCardsUpdated },
            { new: true }
        );
        return res.status(200).json(updated_user);
    } catch (err) {
        console.log(err);
    }
});

// @PUT /users/removeSavedCard
// Remove specified card from savedCards array
router.put("/removeYourCard", async (req, res) => {
    try {
        const user = await User.findById(req.body.userID);
        const yourCardsUpdated = user.yourCards.remove(req.body.cardID);

        const updated_user = await User.findByIdAndUpdate(
            req.body.userID,
            { yourCards: yourCardsUpdated },
            { new: true }
        );
        return res.status(200).json(updated_user);
    } catch (err) {
        console.log(err);
    }
});

// @PUT /users/addNewCard
// Add just created card to user's yourCards array
router.put("/addNewCard", async (req, res) => {
    try {
        const user = await User.findById(req.body.userID);
        const yourCardsUpdated = [...user.yourCards, req.body.cardID];

        const updated_user = await User.findByIdAndUpdate(
            req.body.userID,
            { yourCards: yourCardsUpdated },
            { new: true }
        );
        return res.status(200).json(updated_user);
    } catch (err) {
        console.log(err);
    }
});

// @PUT /users/updatePersonalInfo
// Update user's secondary information
router.put("/updatePersonalInfo", async (req, res) => {
    try {
        const userID = req.body._id;
        const userInfoUpdated = {
            location: req.body.location,
            designInterests: req.body.designInterests,
            favQuote: req.body.favQuote,
        };

        const updated_user = await User.findByIdAndUpdate(userID, userInfoUpdated, {
            new: true,
        }); 
        return res.status(200).json(updated_user);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;
