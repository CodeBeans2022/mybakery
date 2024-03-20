const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const route = express.Router();
const {User, Product} = require('../models');
const user = new User();
const product = new (Product)

route.get('/products', (req, res) => {
    product.fetchProducts(req, res)
})

route.post('/product', bodyParser.json(), (req, res) => {
    product.addProduct(req, res)
})

route.put('/product/:id', bodyParser.json(), (req, res) => {
    product.updateProduct(req, res)
})

route.delete('/product/:id', (req, res) => {
    product.deleteProduct(req, res)
})

module.exports = route;