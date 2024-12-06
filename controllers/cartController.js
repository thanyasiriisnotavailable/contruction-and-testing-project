const cartModel = require('../models/cartModel');

exports.removeFromCart = (req, res) => {
    const { cart_id } = req.body;
    cartModel.removeFromCart(cart_id, (err, productId) => {
        if (err) {
            console.error('Error removing from cart:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }
        res.redirect(`/product-detail/${productId}`);
    });
};

exports.checkout = (req, res) => {
    cartModel.checkout((err) => {
        if (err) {
            console.error('Error during checkout:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }
        res.redirect(`/`);
    });
};