const connection = require('../config/db');

exports.getProductsByCategory = (categoryId, callback) => {
    const sql = `SELECT * FROM product WHERE category_id = ?`;
    connection.query(sql, [categoryId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        results.forEach(product => {
            product.product_price = parseFloat(product.product_price); // Ensure correct type for price
        });
        callback(null, results);
    });
};

exports.getCartItems = (callback) => {
    const cartSql = `
    SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
    FROM product AS p
    INNER JOIN cart AS c ON p.product_name = c.product_name`;
    connection.query(cartSql, (err, cartItems) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, cartItems);
    });
};