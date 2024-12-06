const connection = require('../config/db');

const removeDuplicateWishlistItems = (callback) => {
    const removeDuplicatesSQL = `
        DELETE FROM wishlist
        WHERE product_id IN (
            SELECT product_id FROM (
                SELECT product_id FROM wishlist
                WHERE product_id IN (
                    SELECT product_id FROM wishlist
                    GROUP BY product_id
                    HAVING COUNT(*) > 1
                )
            ) AS temp
        )
    `;
    connection.query(removeDuplicatesSQL, (err, results) => {
        if (err) {
            console.error('Error removing duplicate wishlist items:', err);
            return callback(err, null);
        }
        callback(null, results);
    });
};

const fetchWishlistItems = (callback) => {
    const fetchWishlistSQL = `
        SELECT w.product_id, p.product_name, p.product_images1, p.product_price 
        FROM wishlist w 
        JOIN product p ON w.product_id = p.product_id
    `;
    connection.query(fetchWishlistSQL, (err, results) => {
        if (err) {
            console.error('Error fetching wishlist items:', err);
            return callback(err, null);
        }
        callback(null, results);
    });
};

const addProductToWishlist = (productId, callback) => {
    const sql = 'INSERT INTO wishlist (product_id) VALUES (?)';
    connection.query(sql, [productId], (err, results) => {
        if (err) {
            console.error('Error adding product to wishlist:', err);
            return callback(err, null);
        }
        callback(null, results);
    });
};

const fetchCartItems = (callback) => {
    const cartSql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name
    `;
    connection.query(cartSql, (err, cartItems) => {
        if (err) {
            console.error('Error fetching cart items:', err);
            return callback(err, null);
        }
        callback(null, cartItems);
    });
};

module.exports = {
    removeDuplicateWishlistItems,
    fetchWishlistItems,
    addProductToWishlist,
    fetchCartItems
};