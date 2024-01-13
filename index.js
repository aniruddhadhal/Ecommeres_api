// src/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const searchRoutes = require('./routes/searchRoutes');



const app = express();

const PORT = process.env.PORT || 3000;

const connectionString = 'mongodb://localhost:27017/api';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});





// Middleware
app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/search', searchRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});