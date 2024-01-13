## E-commerce API using Node.js & MongoDB

This is an E-commerce API made using Node.js & MongoDB.

### Steps to Use the API:

1. Run the following command on the terminal in this project's directory:

2. Start the server using the following command:

3. Open Postman.

4. Make a GET request to `localhost:3000/products`.

5. The products should be visible.
Endpoints
---------------------
Create a Product:
Endpoint: POST /products
Request body example:

// {
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
//
Update a Product:
Endpoint: PUT /products/{productId}
Request body example:

{
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
-
