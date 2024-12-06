const connection = require('../config/db');

const registerUser = (email, firstname, lastname, password, callback) => {
    const sql = 'INSERT INTO registcus (email, firstname, lastname, password) VALUES (?, ?, ?, ?)';
    connection.query(sql, [email, firstname, lastname, password], (err, results) => {
        if (err) {
            console.error('Error registering user:', err);
            return callback(err, null);
        }
        callback(null, results);
    });
};

const checkUserCredentials = (email, password, callback) => {
    const sql = 'SELECT * FROM registcus WHERE email = ? AND password = ?';
    connection.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('Error checking user credentials:', err);
            return callback(err, null);
        }

        if (results.length === 1) {
            callback(null, results[0]);
        } else {
            callback(null, null);
        }
    });
};

module.exports = {
    registerUser,
    checkUserCredentials
};
