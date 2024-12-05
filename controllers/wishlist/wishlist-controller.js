const express = require("express");
const router = express.Router();
const { updateWishlist } = require("../controllers/wishlistController");

// Route to handle adding a product to the wishlist
router.post("/addwishlist", async (req, res) => {
  const productId = req.body.productId;

  // Call the updateWishlist function to add the product to the wishlist
  const result = await updateWishlist(req, [productId]);

  // Redirect to the wishlist page
  res.redirect("/wishlist");
});

module.exports = router;
