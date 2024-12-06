const connection = require('../config/db');

exports.registerUser = (user, callback) => {
    const sql = 'INSERT INTO registcus (email, firstname, lastname, password) VALUES (?, ?, ?, ?)';
    connection.query(sql, [user.email, user.firstname, user.lastname, user.password], callback);
};

exports.authenticateUser = (email, password, callback) => {
    const sql = 'SELECT * FROM registcus WHERE email = ? AND password = ?';
    connection.query(sql, [email, password], callback);
};