const connection = require('../config/db');
const wishlistModel = require('../models/wishlistModel');

const getWishlistPage = (req, res) => {
    const cartSql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name
    `;

    wishlistModel.removeDuplicateWishlistItems((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error removing duplicate wishlist items' });
        }

        wishlistModel.fetchWishlistItems((err, wishlistItems) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching wishlist items' });
            }

            connection.query(cartSql, (err, cartItems) => {
                if (err) {
                    return res.status(500).json({ error: 'Error fetching cart items' });
                }

                wishlistItems.forEach(product => {
                    product.product_price = parseFloat(product.product_price);
                });

                res.render('wishlist', { wishlistItems, cartItems });
            });
        });
    });
};

const postAddToWishlist = (req, res) => {
    const { productId } = req.body;

    wishlistModel.addProductToWishlist(productId, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add product to wishlist' });
        }
        res.status(200).json({ message: 'Product added to wishlist successfully' });
    });
};

module.exports = {
    getWishlistPage,
    postAddToWishlist
};
