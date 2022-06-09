const express = require('express');
const app = express();
const mongoose = require('mongoose');

// require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

//Connection to db
const DB_CONNECT = "mongodb+srv://todolist:12345@cluster1.1bnsjpu.mongodb.net/?retryWrites=true&w=majority"
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose
    .connect(DB_CONNECT, connectionParams)
    .then( () => {
        console.info("Connected to the DB");
    })
    .catch((e) => {
        console.log("Error:", e)
    });


// Routes
app.use(require("./routes/route"));

// View engine configuration
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log('Server started at PORT',PORT);
});