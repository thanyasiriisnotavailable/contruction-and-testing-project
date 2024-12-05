document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-icon");
  const cartDropdown = document.getElementById("cart-dropdown");
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  const cartCount = document.getElementById("cart-count");

  cartIcon.addEventListener("click", function () {
    cartDropdown.classList.toggle("active");
  });

  let itemCount = number;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      itemCount++;
      cartCount.textContent = itemCount;
      cartCount.style.display = "block";
    });
  });
  document.addEventListener("click", function (event) {
    const isClickInsideCart =
      cartIcon.contains(event.target) || cartDropdown.contains(event.target);
    if (!isClickInsideCart) {
      cartDropdown.classList.remove("active");
    }
  });
});
