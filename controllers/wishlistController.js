const wishlistModel = require('../models/wishlistModel');

exports.getWishlistPage = (req, res) => {
    // Remove duplicate wishlist items first
    wishlistModel.removeDuplicateWishlistItems((err) => {
        if (err) {
            return res.status(500).json({ error: 'Error removing duplicate wishlist items' });
        }

        // Fetch wishlist items
        wishlistModel.fetchWishlistItems((err, wishlistItems) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching wishlist items' });
            }

            // Fetch cart items
            wishlistModel.fetchCartItems((err, cartItems) => {
                if (err) {
                    return res.status(500).json({ error: 'Error fetching cart items' });
                }

                // Parse product prices
                wishlistItems.forEach(product => {
                    product.product_price = parseFloat(product.product_price);
                });

                // Render the wishlist page
                res.render('wishlist', { wishlistItems, cartItems });
            });
        });
    });
};

exports.postAddToWishlist = (req, res) => {
    const { productId } = req.body;

    wishlistModel.addProductToWishlist(productId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add product to wishlist' });
        }
        res.status(200).json({ message: 'Product added to wishlist successfully' });
    });
};