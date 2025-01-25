const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/free-code");
const Product = require('./models/productModel');
const productRoute = require('./routes/productRoute');
const app = express();

// middlewares
app.use(express.json());        // body ma raw mathi json formet ma data send karva hoy to aa middleware no use thay.
app.use(express.urlencoded({extended: false})); // body ma x-www-form-urlencoded mathi data send karva hoy tyare aa middleware no use thay.


// routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
    res.send("Hello from node api");
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});