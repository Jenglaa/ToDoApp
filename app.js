const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

// View engine configuration
app.set("view engine", "ejs");

// GET METHOD
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// POST METHOD
app.post('/',(req, res) => {
    console.log(req.body);
});

app.listen(3000, () => console.log("Server Is Running!"));