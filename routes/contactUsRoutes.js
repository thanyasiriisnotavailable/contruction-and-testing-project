const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactUsController');

// Define routes for Contact Us page
router.get('/contact-us', contactUsController.getContactUsPage);

module.exports = router;