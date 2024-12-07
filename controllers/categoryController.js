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

exports.getAllProducts = (req, res) => {
  const currentPage = parseInt(req.query.page) || 1;
  const productsPerPage = 12;

  categoryModel.getTotalProducts((err, totalProducts) => {
      if (err) {
          console.error('Error fetching product count:', err);
          return res.status(500).json({ error: 'Something went wrong' });
      }

      const totalPages = Math.ceil(totalProducts / productsPerPage);
      const offset = (currentPage - 1) * productsPerPage;

      categoryModel.getAllProducts(offset, productsPerPage, (err, products) => {
          if (err) {
              console.error('Error fetching product data:', err);
              return res.status(500).json({ error: 'Something went wrong' });
          }

          categoryModel.getCartItems((err, cartItems) => {
              if (err) {
                  console.error('Error fetching cart items:', err);
                  return res.status(500).json({ error: 'Something went wrong' });
              }

              res.render('all-product', {
                  products,
                  currentPage,
                  totalPages,
                  cartItems,
              });
          });
      });
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
  