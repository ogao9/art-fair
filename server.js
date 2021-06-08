//Bring in Express, Mongoose, Route handler
const express = require("express");
const mongoose = require("mongoose");
const cardRoutes = require("./routes/cardRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require('path')

//Create the Express Application
const app = express();

//Connect to Mongo
const db_URI = require("./config/keys.js").MONGO_URI;
mongoose
    .connect(db_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

//Middleware: JSON body-parser and Routes
app.use(express.json());
app.use("/api/cards", cardRoutes);
app.use("/users", userRoutes);

//Serve static assets if in production
if(process.env.NODE_ENV ==="production"){
    //Set static folder, middleware function that serves static files
    app.use(express.static('client/build'))
    app.get('*', (req,res) => {
        //load index.html 
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
}
//

//listen for connections on the PORT and returns an http server with this applications as its callback function
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
