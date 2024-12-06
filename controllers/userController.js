const connection = require('../config/db');
const userModel = require('../models/userModel');

const getRegisterPage = (req, res) => {
    let categoryId = req.query.category_id || '1'; 
    let categoryName = req.query.category_name || 'Clothing';  

    const sql = 'SELECT * FROM product WHERE category_id = ?';
    const cartSql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name
    `;

    connection.query(sql, [categoryId], (err, results) => {
        if (err) {
            console.error('Error fetching product data:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        connection.query(cartSql, (err, cartItems) => {
            if (err) {
                console.error('Error fetching cart items:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            results.forEach(product => {
                product.product_price = parseFloat(product.product_price);
            });

            res.render('account/register', {
                category_id: categoryId,
                category_name: categoryName,
                products: results,
                cartItems: cartItems
            });
        });
    });
};

const getLoginPage = (req, res) => {
    let categoryId = req.query.category_id || '1'; 
    let categoryName = req.query.category_name || 'Clothing';  

    const sql = 'SELECT * FROM product WHERE category_id = ?';
    const cartSql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name
    `;

    connection.query(sql, [categoryId], (err, results) => {
        if (err) {
            console.error('Error fetching product data:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        connection.query(cartSql, (err, cartItems) => {
            if (err) {
                console.error('Error fetching cart items:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            results.forEach(product => {
                product.product_price = parseFloat(product.product_price);
            });

            res.render('account/login', {
                category_id: categoryId,
                category_name: categoryName,
                products: results,
                cartItems: cartItems
            });
        });
    });
};

const postRegister = (req, res) => {
    const { email, firstname, lastname, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    userModel.registerUser(email, firstname, lastname, password, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error registering user' });
        }
        res.redirect('/account/login');
    });
};

const postLogin = (req, res) => {
    const { email, password } = req.body;

    userModel.checkUserCredentials(email, password, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Error checking credentials' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const insertSql = 'INSERT INTO logincus (email, password) VALUES (?, ?)';
        connection.query(insertSql, [user.email, user.password], (insertErr, insertResult) => {
            if (insertErr) {
                console.error('Error storing login data:', insertErr);
            } else {
                console.log('Login data stored successfully');
            }
        });

        res.redirect('/profile');
    });
};

const getProfilePage = (req, res) => {
    const sql = `
       SELECT r.firstname, r.lastname, l.email, l.password, l.created_at
       FROM registcus AS r
       INNER JOIN logincus AS l ON r.email = l.email
       ORDER BY l.created_at DESC
       LIMIT 1
   `;

    const cartSql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name
    `;

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Something went wrong' });
        }

        if (results.length === 1) {
            const user = results[0];

            connection.query(cartSql, (err, cartItems) => {
                if (err) {
                    return res.status(500).json({ error: 'Something went wrong' });
                }

                res.render('profile', { user, cartItems });
            });
        } else {
            res.status(404).send('User not found');
        }
    });
};

module.exports = {
    getRegisterPage,
    getLoginPage,
    postRegister,
    postLogin,
    getProfilePage
};
