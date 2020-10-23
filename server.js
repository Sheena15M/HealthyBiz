//Packages needed
const express = require ('express');
const mongoose = require ('mongoose');

//Port needed to run on local host
const PORT = process.env.PORT || 3000;

const app = express ();

//App usage and where to get it from
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

//Connect to mongoose, otherwise it won't work, mongoose and MongoDB go hand in hand