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
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Add product to wishlist
const addProductToWishlist = (productId, callback) => {
    const sql = 'INSERT INTO wishlist (product_id) VALUES (?)';
    connection.query(sql, [productId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    removeDuplicateWishlistItems,
    fetchWishlistItems,
    addProductToWishlist
};
