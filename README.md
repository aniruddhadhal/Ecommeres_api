## E-commerce API using Node.js & MongoDB

This is an E-commerce API made using Node.js & MongoDB.

# E-commerce API

## Overview

This Node.js and Express application serves as a simple API for an e-commerce system.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-api.git
2.Install dependencies

npm install

3.Start the server
npm start
The server will run on http://localhost:3000 by default.

API Usage
Base URL
All API endpoints are accessible under the base URL:
http://localhost:3000


*API Documentation

Product Endpoints
Search Endpoint

Endpoints
---------------------
Create a Product:
Endpoint: POST /products
Request body example:

* {
  "name": "Example Product",
  "description": "This is an example product.",
  "price": 29.99,
  "variants": [
    {
      "name": "Variant 1",
      "sku": "V1SKU123",
      "additionalCost": 5.00,
      "stockCount": 50
    }
  ]
}

Update a Product:
Endpoint: PUT /products/{productId}
Request body example:

* {
  "name": "Updated Example Product",
  "description": "This is an updated example product.",
  "price": 34.99,
  "variants": [
    {
      "name": "Updated Variant 1",
      "sku": "V1SKU123",
      "additionalCost": 5.00,
     "stockCount": 40
    }
  ]
}

Search Endpoint 
Search Products:
* Endpoint: GET /search?query=your_search_term
Replace your_search_term with the term you want to search for
