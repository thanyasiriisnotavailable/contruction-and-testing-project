const express = require('express');
const wishlistController = require('../controllers/wishlistController');

const router = express.Router();

router.get('/wishlist', wishlistController.getWishlistPage);
router.post('/addwishlist', wishlistController.postAddToWishlist); 

module.exports = router;
