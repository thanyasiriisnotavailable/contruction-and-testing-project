const userModel = require('../models/accountModel');

exports.getRegisterPage = (req, res) => {
    const categoryId = req.query.category_id || '1';
    const categoryName = req.query.category_name || 'Clothing';

    userModel.getProductsByCategory(categoryId, (err, products) => {
        if (err) {
            console.error('Error fetching product data:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        userModel.getCartItems((err, cartItems) => {
            if (err) {
                console.error('Error fetching cart items:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            products.forEach(product => {
                product.product_price = parseFloat(product.product_price);
            });

            res.render('account/register', {
                category_id: categoryId,
                category_name: categoryName,
                products,
                cartItems
            });
        });
    });
};

exports.getLoginPage = (req, res) => {
    const categoryId = req.query.category_id || '1';
    const categoryName = req.query.category_name || 'Clothing';

    userModel.getProductsByCategory(categoryId, (err, products) => {
        if (err) {
            console.error('Error fetching product data:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        userModel.getCartItems((err, cartItems) => {
            if (err) {
                console.error('Error fetching cart items:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            products.forEach(product => {
                product.product_price = parseFloat(product.product_price);
            });

            res.render('account/login', {
                category_id: categoryId,
                category_name: categoryName,
                products,
                cartItems
            });
        });
    });
};

exports.postRegister = (req, res) => {
    const { email, firstname, lastname, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    userModel.registerUser(email, firstname, lastname, password, (err) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ error: 'Error registering user' });
        }

        res.redirect('/account/login');
    });
};

exports.postLogin = (req, res) => {
    const { email, password } = req.body;

    userModel.checkUserCredentials(email, password, (err, results) => {
        if (err) {
            console.error('Error checking credentials:', err);
            return res.status(500).json({ error: 'Error checking credentials' });
        }

        if (results.length !== 1) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = results[0];
        userModel.insertLoginData(user.email, user.password, (insertErr) => {
            if (insertErr) {
                console.error('Error storing login data:', insertErr);
            } else {
                console.log('Login data stored successfully');
            }
        });

        res.redirect('/profile');
    });
};

exports.getProfilePage = (req, res) => {
    userModel.getLatestUserProfile((err, results) => {
        if (err) {
            console.error('Error fetching user profile:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        if (results.length !== 1) {
            return res.status(404).send('User not found');
        }

        const user = results[0];
        userModel.getCartItems((err, cartItems) => {
            if (err) {
                console.error('Error fetching cart items:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            res.render('profile', { user, cartItems });
        });
    });
};