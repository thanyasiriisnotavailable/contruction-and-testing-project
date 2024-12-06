const connection = require('../config/db');

exports.removeFromCart = (cart_id, callback) => {
    const sql = 'SELECT product_name FROM cart WHERE cart_id = ?';
    connection.query(sql, [cart_id], (err, results) => {
        if (err) return callback(err);
        if (results.length === 0) return callback(new Error('Product not found in cart'));

        const productName = results[0].product_name;
        const sqlProductId = 'SELECT product_id FROM product WHERE product_name = ?';

        connection.query(sqlProductId, [productName], (err, productResults) => {
            if (err) return callback(err);
            if (productResults.length === 0) return callback(new Error('Product not found in product table'));

            const productId = productResults[0].product_id;
            const deleteSql = 'DELETE FROM cart WHERE cart_id = ?';
            
            connection.query(deleteSql, [cart_id], (err, deleteResult) => {
                if (err) return callback(err);
                callback(null, productId); // Return productId to redirect after removal
            });
        });
    });
};

exports.checkout = (callback) => {
    const sql = `
        SELECT c.cart_id, p.product_id, c.product_price, c.product_quantity 
        FROM cart c 
        JOIN product p ON c.product_name = p.product_name
    `;
    connection.query(sql, (err, results) => {
        if (err) return callback(err);

        let totalPrice = 0;
        results.forEach(item => {
            const productPrice = parseFloat(item.product_price);
            totalPrice += productPrice * item.product_quantity;
        });

        const values = results.map(item => {
            const productPrice = parseFloat(item.product_price);
            return [item.product_id, item.product_quantity, (productPrice * item.product_quantity)];
        });

        const insertSql = 'INSERT INTO bill (product_id, number_of_items, bill_price) VALUES ?';
        connection.query(insertSql, [values], (error, result) => {
            if (error) return callback(error);

            const deleteCartItemsSql = 'DELETE FROM cart';
            connection.query(deleteCartItemsSql, (deleteError, deleteResult) => {
                if (deleteError) return callback(deleteError);
                callback(null); // Successfully checked out
            });
        });
    });
};