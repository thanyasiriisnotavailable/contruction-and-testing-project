const contactUsModel = require('../models/contactUsModel');

exports.getContactUsPage = (req, res) => {
    const categoryId = req.query.category_id || '1'; 
    const categoryName = req.query.category_name || 'Clothing'; 

    contactUsModel.getProductsByCategory(categoryId, (err, products) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Error fetching products' });
        }
        contactUsModel.getCartItems((err, cartItems) => {
            if (err) {
                console.error('Error fetching cart items:', err);
                return res.status(500).json({ error: 'Error fetching cart items' });
            }

            res.render('contact-us', {
                category_id: categoryId,
                category_name: categoryName,
                products,
                cartItems
            });
        });
    });
};