const wishlistModel = require('../models/wishlistModel');

exports.getWishlist = (req, res) => {
    const userId = req.session.userId;

    wishlistModel.removeDuplicates((err) => {
        if (err) {
            console.error('Error removing duplicates from wishlist:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        wishlistModel.getUserWishlist(userId, (err, wishlistItems) => {
            if (err) {
                console.error('Error fetching wishlist items:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            const cartSql = `
                SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, 
                       c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
                FROM product AS p
                INNER JOIN cart AS c ON p.product_name = c.product_name
            `;

            connection.query(cartSql, (err, cartItems) => {
                if (err) {
                    console.error('Error fetching cart items:', err);
                    return res.status(500).json({ error: 'Something went wrong' });
                }

                res.render('wishlist', { wishlistItems, cartItems });
            });
        });
    });
};

exports.addToWishlist = (req, res) => {
    const userId = req.session.userId;
    const { productId, productName, productPrice, productImage } = req.body;

    const product = { productId, productName, productPrice, productImage };

    wishlistModel.addToWishlist(userId, product, (err) => {
        if (err) {
            console.error('Error adding to wishlist:', err);
            return res.status(500).send('An error occurred while updating the wishlist');
        }

        res.send('Wishlist updated successfully');
    });
};

// exports.addToWishlist = (req, res) => {
//     const { productId } = req.body;

//     productModel.addToWishlist(productId, (err, results) => {
//         if (err) {
//             console.error('Error adding product to wishlist:', err);
//             return res.status(500).json({ error: 'Failed to add product to wishlist' });
//         }
//         console.log('Product added to wishlist:', productId);
//         res.status(200).json({ message: 'Product added to wishlist successfully' });
//     });
// };