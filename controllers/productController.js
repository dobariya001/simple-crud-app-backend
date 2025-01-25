const Product = require("../models/productModel");


// get all products
exports.getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


// get single product by id
exports.getProduct = async (req, res) => {          // method 1 ma id ni aagal "_" use karvu and second method ma "_" use karvu nahi. 
    try {
        // const product = await Product.find(req.params);              // method 1
        //              OR
        const { id } = req.params;                                      // method 2
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch {   
        res.status(500).json({ message: error.message });
    };
};


// add product
exports.addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


// update product by id
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        };

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


// delete product by id
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        };

        res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};