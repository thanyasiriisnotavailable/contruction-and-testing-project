const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/categories', categoryController.getCategories);
router.get('/category-page-layout', categoryController.getProductsByCategory);

module.exports = router;