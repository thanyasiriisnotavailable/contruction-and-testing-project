const homePageModel = require('../models/homePageModel');

exports.getHomePage = (req, res) => {
    let categoryId = req.query.category_id || '1'; 
    let categoryName = req.query.category_name || 'Clothing';

    homePageModel.getProductsByCategory(categoryId, (err, products) => {
        if (err) {
            console.error('Error fetching product data:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        homePageModel.getCartItems((err, cartItems) => {
            if (err) {
                console.error('Error fetching cart items:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            res.render('home-page', {
                category_id: categoryId,
                category_name: categoryName,
                products: products,
                cartItems: cartItems
            });
        });
    });
};