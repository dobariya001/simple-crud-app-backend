const express = require('express');
const Product = require('../models/productModel');
const { getProducts, getProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/add", addProduct);

router.put("/update/:id", updateProduct);

router.delete("/delete/:id", deleteProduct);


module.exports = router;