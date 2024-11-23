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

// JavaScript to handle click event on wishlist icon
document.addEventListener("DOMContentLoaded", function () {
  const wishlistIcons = document.querySelectorAll(".wishlist-icon");

  wishlistIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      icon.querySelector("i").classList.toggle("clicked"); // Toggle clicked class
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("/categories")
    .then((response) => response.json())
    .then((categories) => {
      const categoryDropdown = document.getElementById("categoryDropdown");
      categories.forEach((category) => {
        const categoryItem = document.createElement("li");
        let categoryHTML = ""; // Define categoryHTML here
        if (
          category.category_name === "trousers & shorts" ||
          category.category_name === "bag" ||
          category.category_name === "top" ||
          category.category_name === "shoes"
        ) {
          // Construct the HTML string for each category item
          if (category.category_name === "top") {
            categoryHTML = `<a class="dropdown-item" href="/Top">Top</a>`;
          } else if (category.category_name === "trousers & shorts") {
            categoryHTML = `<a class="dropdown-item" href="/Trousersnshorts">Trousers and Shorts</a>`;
          } else if (category.category_name === "bag") {
            categoryHTML = `<a class="dropdown-item" href="/Bag">Bag</a>`;
          } else if (category.category_name === "shoes") {
            categoryHTML = `<a class="dropdown-item" href="/Shoes">Shoes</a>`;
          }
          categoryItem.innerHTML = categoryHTML;
        } else {
          categoryItem.innerHTML = `<a class="dropdown-item" href="/default_category_layout?category_id=${category.category_id}&category_name=${category.category_name}">${category.category_name}</a>`;
        }
        categoryDropdown.appendChild(categoryItem);
      });

      const viewAllCategoryItem = document.createElement("li");
      viewAllCategoryItem.innerHTML = `<a class="dropdown-item" href="/productall">View all</a>`;
      categoryDropdown.appendChild(viewAllCategoryItem);
    })
    .catch((error) => console.error("Error fetching categories:", error));
});