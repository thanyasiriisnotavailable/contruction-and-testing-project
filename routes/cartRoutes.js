const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/remove-from-cart', cartController.removeFromCart);
router.post('/checkout', cartController.checkout);
router.post('/update-quantity', cartController.updateQuantity);

module.exports = router;