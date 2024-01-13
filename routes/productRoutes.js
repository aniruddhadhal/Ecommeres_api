// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Create a new product
router.post('/', async(req, res) => {
    // Implementation to create a product
    try {
        const { name, description, price, variants } = req.body;

        // Validate required fields
        if (!name || !description || !price) {
            return res.status(400).json({ error: 'Name, description, and price are required.' });
        }

        // Create a new product
        const product = new Product({
            name,
            description,
            price,
            variants,
        });

        // Save the product to the database
        const savedProduct = await product.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a product
router.put('/:productId', async(req, res) => {
    // Implementation to update a product
    try {
        const { name, description, price, variants } = req.body;

        // Validate required fields
        if (!name || !description || !price) {
            return res.status(400).json({ error: 'Name, description, and price are required.' });
        }

        // Find the product by ID
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.productId, { name, description, price, variants }, { new: true }
        );

        // Check if the product with the given ID exists
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a product
router.delete('/:productId', async(req, res) => {
    // Implementation to delete a product
    try {
        // Find the product by ID and remove it
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId);

        // Check if the product with the given ID exists
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

// Get all products
router.get('/', async(req, res) => {
    // Implementation to get all products
    try {
        // Retrieve all products from the database
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;