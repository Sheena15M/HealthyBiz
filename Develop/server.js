//Packages needed
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

//Port needed to run on local host
const PORT = process.env.PORT || 3000;

const app = express ();

//App usage and where to get it from
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));



//Connect to mongoose, otherwise it won't work, mongoose and MongoDB go hand in hand
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/HealthyBiz", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//Route to the API and make sure your port knows to listen out
// app.use(require(".api.js"));

app.use(require("./Routes/htmlroutes.js"))

app.listen(PORT, () => {
    console.log('App running on port ${PORT}!');
});