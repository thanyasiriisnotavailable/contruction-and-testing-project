document.addEventListener("DOMContentLoaded", function () {
  const numberElement = document.querySelector(".number");
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
  });

  decrementBtn.addEventListener("click", function () {
    if (number > 0) {
      number--;
      updateNumber();
    }
  });
});