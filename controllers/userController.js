const userModel = require('../models/userModel');

exports.registerUser = (req, res) => {
    const { email, firstname, lastname, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    const user = { email, firstname, lastname, password };
    userModel.registerUser(user, (err) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ error: 'Registration failed' });
        }
        res.redirect('/account/login');
    });
};