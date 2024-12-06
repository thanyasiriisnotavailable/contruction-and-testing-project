const productModel = require('../models/productModel');

exports.getProducts = (req, res) => {
    productModel.getProducts((err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Failed to fetch products' });
        }
        res.render('product', { products: results });
    });
};

// Helper function to calculate total pages for pagination
const calculateTotalPages = (totalProducts, productsPerPage) => {
    return Math.ceil(totalProducts / productsPerPage);
};

exports.getAllProducts = (req, res) => {
    const currentPage = parseInt(req.query.page) || 1;
    const productsPerPage = 12;

    // Get the total number of products
    productModel.getTotalProducts((err, results) => {
        if (err) {
            console.error('Error fetching product count:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        const totalProducts = results[0].totalProducts;
        const totalPages = calculateTotalPages(totalProducts, productsPerPage);
        const offset = (currentPage - 1) * productsPerPage;
        
        // Get the products for the current page
        productModel.getProducts(offset, productsPerPage, (err, products) => {
            if (err) {
                console.error('Error fetching products:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            // Fetch cart items
            productModel.getCartItems((err, cartItems) => {
                if (err) {
                    console.error('Error fetching cart items:', err);
                    return res.status(500).json({ error: 'Something went wrong' });
                }

                // Render the products view with pagination
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

exports.getProductDetail = (req, res) => {
    const productId = req.params.productId;

    // Get product details by productId
    productModel.getProductById(productId, (err, results) => {
        if (err) {
            console.error('Error fetching product data:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Fetch cart items
        productModel.getCartItems((err, cartItems) => {
            if (err) {
                console.error('Error fetching cart items:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            // Render the product detail view
            res.render('product-detail', { product: results[0], cartItems });
        });
    });
};

exports.addToCart = (req, res) => {
    const { product_name, product_size, product_quantity, product_price, cart_id } = req.body;

    // Get product_id by product_name
    productModel.getProductByName(product_name, (err, results) => {
        if (err) {
            console.error('Error fetching product ID:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        if (results.length === 0) {
            console.error('Product not found:', product_name);
            return res.status(404).json({ error: 'Product not found' });
        }

        const product_id = results[0].product_id;

        // Add product to the cart
        productModel.addToCart(cart_id, product_name, product_size, product_quantity, product_price, (err) => {
            if (err) {
                console.error('Error adding product to cart:', err);
                return res.status(500).json({ error: 'Something went wrong' });
            }

            console.log('Product added to cart successfully');
            res.redirect(`/product-detail/${product_id}`); // Use product_id for redirection
        });
    });
};