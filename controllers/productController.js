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

// Controller for adding a product to the cart
exports.addToCart = (req, res) => {
    const { product_name, product_size, product_quantity, product_price, cart_id } = req.body;

    // Add product to the cart
    productModel.addToCart(cart_id, product_name, product_size, product_quantity, product_price, (err, result) => {
        if (err) {
            console.error('Error adding product to cart:', err);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        console.log('Product added to cart successfully');
        res.redirect(`/product-detail/${product_name}`);
    });
};

// exports.addToWishlist = (req, res) => {
//     const { productId } = req.body;

//     productModel.addToWishlist(productId, (err, results) => {
//         if (err) {
//             console.error('Error adding product to wishlist:', err);
//             return res.status(500).json({ error: 'Failed to add product to wishlist' });
//         }
//         console.log('Product added to wishlist:', productId);
//         res.status(200).json({ message: 'Product added to wishlist successfully' });
//     });
// };

// exports.addToWishlist = (req, res) => {
//     const userId = req.session.userId;
//     const { productId } = req.body;

//     productModel.addToWishlist(userId, productId, (err) => {
//         if (err) {
//             console.error('Error adding to wishlist:', err);
//             return res.status(500).send('An error occurred while updating the wishlist');
//         }
//         res.send('Product added to wishlist successfully');
//     });
// };