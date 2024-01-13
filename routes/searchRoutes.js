// src/routes/searchRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Search products
router.get('/', async(req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required for search.' });
        }

        // Use regex to perform case-insensitive search on name, description, and variant name
        const products = await Product.find({
            $or: [
                { name: { $regex: new RegExp(query, 'i') } },
                { description: { $regex: new RegExp(query, 'i') } },
                { 'variants.name': { $regex: new RegExp(query, 'i') } },
            ],
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;