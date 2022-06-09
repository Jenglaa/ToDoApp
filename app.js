const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

//Connection to db
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log("Connected to db!");

    app.listen(PORT, () => console.log("Server Up and running"));

});

// Routes
app.use(require("./routes/route"));


// View engine configuration
app.set("view engine", "ejs");