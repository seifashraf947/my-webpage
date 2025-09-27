const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// This array will store all your products in memory.
const products = [];

// Middleware to parse incoming JSON data from POST requests.
app.use(express.json());

// Serve static files from the 'public' directory.
// __dirname is the absolute path to the directory containing server.js.
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get all products.
// Handles the 'GET' request from your js.js file.
app.get('/products', (req, res) => {
    res.status(200).json(products);
});

// API endpoint to add a new product.
// Handles the 'POST' request from your js.js file.
app.post('/products', (req, res) => {
    const { name, price, quantity } = req.body;
    const finalPrice = price * quantity;
    const newProduct = { name, price, quantity, finalPrice };
    products.push(newProduct);
    console.log('Product added:', newProduct);
    res.status(201).json(newProduct);
});

// Start the server.
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
















//cd C:\Users\Ibrahim\OneDrive\Desktop\css



//npm init -y
//npm install express

// node server.js










