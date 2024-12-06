const express = require('express');
const contactUsModel = require('../models/contactUsModel.js');  

const router = express.Router();

// Route to handle /contact-us page
router.get('/contact-us', (req, res) => {
    let categoryId = req.query.category_id || '1'; 
    let categoryName = req.query.category_name || 'Clothing';  

    // Fetch products based on categoryId
    contactUsModel.getProductsByCategory(categoryId, (err, products) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching products' });
        }

        // Fetch cart items
        contactUsModel.getCartItems((err, cartItems) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching cart items' });
            }

            // Render the contact-us page and pass the data
            res.render('contact-us', {
                category_id: categoryId,
                category_name: categoryName,
                products: products,
                cartItems: cartItems
            });
        });
    });
});

module.exports = router;
