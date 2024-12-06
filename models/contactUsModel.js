const connection = require('../config/db'); 

const getProductsByCategory = (categoryId, callback) => {
    const sql = `SELECT *, CAST(product_price AS DECIMAL(10, 2)) AS product_price FROM product WHERE category_id = ?`;

    connection.query(sql, [categoryId], (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return callback(err, null);
        }
        callback(null, results);
    });
};

const getCartItems = (callback) => {
    const cartSql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name`;

    connection.query(cartSql, (err, cartItems) => {
        if (err) {
            console.error('Error fetching cart items:', err);
            return callback(err, null);
        }
        callback(null, cartItems);
    });
};

module.exports = {
    getProductsByCategory,
    getCartItems
};
