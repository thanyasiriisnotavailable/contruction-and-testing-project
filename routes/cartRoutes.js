const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/remove_from_cart', cartController.removeFromCart);
router.post('/checkout', cartController.checkout);

module.exports = router;