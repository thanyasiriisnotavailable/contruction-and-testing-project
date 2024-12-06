const connection = require('../config/db');

// Register a new user
const registerUser = (email, firstname, lastname, password, callback) => {
    const sql = 'INSERT INTO registcus (email, firstname, lastname, password) VALUES (?, ?, ?, ?)';
    connection.query(sql, [email, firstname, lastname, password], callback);
};

// Check user credentials
const checkUserCredentials = (email, password, callback) => {
    const sql = 'SELECT * FROM registcus WHERE email = ? AND password = ?';
    connection.query(sql, [email, password], callback);
};

// Fetch products by category ID
const getProductsByCategory = (categoryId, callback) => {
    const sql = 'SELECT * FROM product WHERE category_id = ?';
    connection.query(sql, [categoryId], callback);
};

// Fetch cart items
const getCartItems = (callback) => {
    const sql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name
    `;
    connection.query(sql, callback);
};

// Insert login data
const insertLoginData = (email, password, callback) => {
    const sql = 'INSERT INTO logincus (email, password) VALUES (?, ?)';
    connection.query(sql, [email, password], callback);
};

// Fetch the latest logged-in user's profile
const getLatestUserProfile = (callback) => {
    const sql = `
        SELECT r.firstname, r.lastname, l.email, l.password, l.created_at
        FROM registcus AS r
        INNER JOIN logincus AS l ON r.email = l.email
        ORDER BY l.created_at DESC
        LIMIT 1
    `;
    connection.query(sql, callback);
};

module.exports = {
    registerUser,
    checkUserCredentials,
    getProductsByCategory,
    getCartItems,
    insertLoginData,
    getLatestUserProfile
};