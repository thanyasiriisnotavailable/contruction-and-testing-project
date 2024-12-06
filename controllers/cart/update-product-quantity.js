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
    fetch("/update-quantity", {
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
