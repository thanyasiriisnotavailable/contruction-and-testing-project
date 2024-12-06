const connection = require('../config/db');

const getProducts = (callback) => {
    const sql = 'SELECT * FROM product';
    connection.query(sql, callback);
};

// Get products with pagination
const getProductsPaginated = (offset, limit, callback) => {
    const sql = `SELECT * FROM product LIMIT ? OFFSET ?`;
    connection.query(sql, [limit, offset], callback);
};

const getProductByName = (productName, callback) => {
    const sql = 'SELECT product_id FROM product WHERE product_name = ?';
    connection.query(sql, [productName], callback);
};

// Get total number of products for pagination
const getTotalProducts = (callback) => {
    const sql = 'SELECT COUNT(*) AS totalProducts FROM product';
    connection.query(sql, callback);
};

const getProductById = (id, callback) => {
    const sql = 'SELECT * FROM product WHERE product_id = ?';
    connection.query(sql, [id], callback);
};

const getCartItems = (callback) => {
    const cartSql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, 
               c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name
    `;
    connection.query(cartSql, callback);
};

const addToCart = (cartId, productName, productSize, productQuantity, productPrice, callback) => {
    const sqlInsertCart = 'INSERT INTO cart (cart_id, product_name, product_size, product_quantity, product_price) VALUES (?, ?, ?, ?, ?)';
    connection.query(sqlInsertCart, [cartId, productName, productSize, productQuantity, productPrice], callback);
};

module.exports = {
    getProducts,
    getProductsPaginated,
    getProductByName,
    getTotalProducts,
    getProductById,
    getCartItems,
    addToCart,
};