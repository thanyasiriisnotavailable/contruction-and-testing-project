const WishDB = require("../models/wishModel");

const updateWishlist = async function(req, productDetails) {
    try {
        // Get user's wishlist
        const userWishlist = await WishDB.getUserWishlist(req.session.userId);

        // Add the product details to the wishlist
        userWishlist.push(productDetails);

        // Save the updated wishlist
        await WishDB.updateUserWishlist(req.session.userId, userWishlist);

        // Return a success message or any other relevant data
        return "Wishlist updated successfully";
    } catch (error) {
        // Handle errors
        console.error("Error updating wishlist:", error);
        return "An error occurred while updating the wishlist";
    }
};

module.exports = { updateWishlist };
