const express = require('express');
const router = express.Router();
const { updateWishlist } = require('../controllers/wishlistController');

// Route to handle adding a product to the wishlist
router.post('/addwishlist', async (req, res) => {
    const { productId, productName, productPrice, productImage } = req.body;

    // Call the updateWishlist function to add the product to the wishlist
    const result = await updateWishlist(req, { 
        productId: productId,
        productName: productName,
        productPrice: productPrice,
        productImage: productImage
    });
    
    // Send response back to client
    res.send(result);
});

module.exports = router;
