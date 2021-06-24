//Bring in express, mongoose, and our route handlers
const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
const dotenv = require('dotenv')
dotenv.config() //tells server to load anything in dotenv file into environment variable

const cardRoutes = require("./routes/cardRoutes");
const userRoutes = require("./routes/userRoutes");

//Create the Express Application
const app = express();

//Middleware: JSON body-parser and Routes
app.use(express.json());
app.use("/api/cards", cardRoutes);
app.use("/users", userRoutes);

//Connect to MongoDB
const db_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ihwbl.mongodb.net/Design-io?retryWrites=true&w=majority`
mongoose
    .connect(db_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));


//Serve static assets if in production
//The heroku-postbuild script (in package.json) is run automatically during production
if(process.env.NODE_ENV ==="production"){
    //Set static folder, middleware function that serves static files
    app.use(express.static('client/build'))
    app.get('*', (req,res) => {
        //load index.html 
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
}


//listen for connections on the PORT and returns an http server with this applications as its callback function
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//we could put this app.listen inside the mongoose.then statement above
