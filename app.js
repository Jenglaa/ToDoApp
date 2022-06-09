const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

//Connection to db
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log("Connected to db!");
});

// Routes
app.use(require("./routes/route"));


// View engine configuration
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log('Server started at PORT ${PORT}');
});