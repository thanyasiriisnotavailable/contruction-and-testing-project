const connection = require('../config/db');

// Fetch a user's wishlist items
exports.getUserWishlist = (userId, callback) => {
    const sql = `
        SELECT w.product_id, p.product_name, p.product_images1, p.product_price 
        FROM wishlist w 
        JOIN product p ON w.product_id = p.product_id
        WHERE w.user_id = ?
    `;
    connection.query(sql, [userId], callback);
};

// Add an item to the user's wishlist
exports.addToWishlist = (userId, product, callback) => {
    const { productId, productName, productPrice, productImage } = product;
    const sql = `
        INSERT INTO wishlist (user_id, product_id, product_name, product_price, product_image)
        VALUES (?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE user_id = user_id
    `;
    connection.query(
        sql,
        [userId, productId, productName, productPrice, productImage],
        callback
    );
};

// Remove duplicate entries from the wishlist
exports.removeDuplicates = (callback) => {
    const sql = `
        DELETE FROM wishlist
        WHERE product_id IN (
            SELECT product_id FROM (
                SELECT product_id FROM wishlist
                GROUP BY product_id
                HAVING COUNT(*) > 1
            ) AS temp
        )
    `;
    connection.query(sql, callback);
};