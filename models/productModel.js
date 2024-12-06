const connection = require('../config/db');


exports.getProducts = (callback) => {
    const sql = 'SELECT * FROM product';
    connection.query(sql, callback);
};

// Get products with pagination
exports.getProducts = (offset, limit, callback) => {
    const sql = `SELECT * FROM product LIMIT ? OFFSET ?`;
    connection.query(sql, [limit, offset], callback);
};

// Get total number of products for pagination
exports.getTotalProducts = (callback) => {
    const sql = 'SELECT COUNT(*) AS totalProducts FROM product';
    connection.query(sql, callback);
};

exports.getProductById = (id, callback) => {
    const sql = 'SELECT * FROM product WHERE product_id = ?';
    connection.query(sql, [id], callback);
};

exports.getCartItems = (callback) => {
    const cartSql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, 
               c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name
    `;
    connection.query(cartSql, callback);
};

exports.addToCart = (cartId, productName, productSize, productQuantity, productPrice, callback) => {
    const sqlInsertCart = 'INSERT INTO cart (cart_id, product_name, product_size, product_quantity, product_price) VALUES (?, ?, ?, ?, ?)';
    connection.query(sqlInsertCart, [cartId, productName, productSize, productQuantity, productPrice], callback);
};

// exports.addToWishlist = (productId, callback) => {
//     const sql = 'INSERT INTO wishlist (product_id) VALUES (?)';
//     connection.query(sql, [productId], callback);
// };