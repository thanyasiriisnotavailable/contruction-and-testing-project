document.addEventListener("DOMContentLoaded", function () {
  // Retrieve product details from local storage
  const productDetailsString = localStorage.getItem("wishlistProduct");
  if (productDetailsString) {
    const productDetails = JSON.parse(productDetailsString);

    // Display product details on the page
    const wishlistContainer = document.getElementById("wishlist-container");

    // Create a card to display the product
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    // Create an image element
    const img = document.createElement("img");
    img.src = `/image/imageBag/${productDetails.productId}.jpg`;
    img.alt = "Product Image";
    img.classList.add("img-fluid");
    card.appendChild(img);

    // Create a card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Add product name to card body
    const productName = document.createElement("h5");
    productName.classList.add("card-title");
    productName.textContent = productDetails.name;
    cardBody.appendChild(productName);

    // Add product price to card body
    const productPrice = document.createElement("p");
    productPrice.classList.add("card-text");
    productPrice.textContent = `Price: ${productDetails.price}`;
    cardBody.appendChild(productPrice);

    card.appendChild(cardBody);

    // Append card to wishlist container
    wishlistContainer.appendChild(card);
  }
});