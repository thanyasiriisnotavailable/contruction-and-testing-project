function removeCartItem(cartId) {
  document.getElementById("removeForm" + cartId).submit();
}

document.addEventListener("DOMContentLoaded", function () {
  const numberElement = document.getElementById("number");
  const incrementBtn = document.getElementById("incrementBtn");
  const decrementBtn = document.getElementById("decrementBtn");

  let number = parseInt(numberElement.textContent);

  function updateNumber() {
    numberElement.textContent = number;
    document.getElementById("productQuantity").value = number;
  }

  incrementBtn.addEventListener("click", function () {
    number++;
    updateNumber();
    updateQuantityOnServer(number);
  });

  decrementBtn.addEventListener("click", function () {
    if (number > 0) {
      number--;
      updateNumber();
      updateQuantityOnServer(number);
    }
  });

  function updateQuantityOnServer(newQuantity) {
    const cartId = numberElement.dataset.cartId;
    fetch("/update_quantity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartId: cartId,
        newQuantity: newQuantity,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Quantity updated successfully");
        } else {
          console.error("Failed to update quantity:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error updating quantity:", error);
      });
  }
});

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
