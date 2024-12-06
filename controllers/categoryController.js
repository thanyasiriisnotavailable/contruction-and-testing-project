const categoryModel = require('../models/categoryModel');

exports.getCategories = (req, res) => {
    categoryModel.getCategories((err, categories) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }
        res.json(categories);
    });
};


exports.getProductsByCategory = (req, res) => {
    const categoryId = req.query.category_id || '1';
    const categoryName = req.query.category_name || 'Category';
  
    categoryModel.getProductsByCategory(categoryId, (err, { products, cartItems }) => {
      if (err) {
        console.error('Error fetching category page:', err);
        return res.status(500).json({ error: 'Something went wrong' });
      }
  
      res.render('category-page-layout', {
        category_id: categoryId,
        category_name: categoryName,
        products,
        cartItems
      });
    });
  };
  