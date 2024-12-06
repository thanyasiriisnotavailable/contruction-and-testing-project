const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getProducts);
router.get('/all-product', productController.getAllProducts);
router.get('/product-detail/:productId', productController.getProductDetail);
router.post('/add-to-cart', productController.addToCart);

module.exports = router;