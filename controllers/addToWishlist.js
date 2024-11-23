document.addEventListener("DOMContentLoaded", function () {
    const wishlistIcons = document.querySelectorAll(".wishlist-icon");
  
    wishlistIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        const productId = this.parentElement.getAttribute("product_id");
  
        // Make an AJAX request to add the product to the wishlist
        fetch("/addwishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: productId }),
        })
          .then((response) => {
            if (response.ok) {
              // If adding to wishlist is successful, redirect to wishlist page
              window.location.href = "/wishlist"; // Redirect to wishlist page
            } else {
              // Handle error response if needed
              console.error("Failed to add product to wishlist");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    });
  });