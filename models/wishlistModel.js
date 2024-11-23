const express = require('express');
const router = express.Router();
const WishDB = require('../models/wishModel');

// Route to handle adding a product to the wishlist
router.post('/addwishlist', async (req, res) => {
    const { productId, productName, productPrice, productImage } = req.body;

    try {
        // Get user's wishlist
        const userWishlist = await WishDB.getUserWishlist(req.session.userId);

        // Add the product details to the wishlist
        userWishlist.push({
            productId: productId,
            productName: productName,
            productPrice: productPrice,
            productImage: productImage
        });

        // Save the updated wishlist
        await WishDB.updateUserWishlist(req.session.userId, userWishlist);

        // Send success response
        res.send("Wishlist updated successfully");
    } catch (error) {
        // Handle errors
        console.error("Error updating wishlist:", error);
        res.status(500).send("An error occurred while updating the wishlist");
    }
});

module.exports = router;