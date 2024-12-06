const connection = require('../config/db');

exports.getCategories = (callback) => {
    const fetchCategoriesSQL = 'SELECT * FROM category';
    connection.query(fetchCategoriesSQL, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

exports.getProductsByCategory = (categoryId, callback) => {
    const sql = 'SELECT * FROM product WHERE category_id = ?';
    const cartSql = `
        SELECT p.product_images1, p.product_name, p.product_price, c.product_quantity, c.product_name, c.product_price, c.cart_id, c.product_size, p.product_id
        FROM product AS p
        INNER JOIN cart AS c ON p.product_name = c.product_name
    `;
    
    connection.query(sql, [categoryId], (err, results) => {
        if (err) return callback(err);

        connection.query(cartSql, (err, cartItems) => {
            if (err) return callback(err);

            results.forEach(product => {
                product.product_price = parseFloat(product.product_price);
            });
            
            callback(null, { products: results, cartItems: cartItems });
        });
    });
};