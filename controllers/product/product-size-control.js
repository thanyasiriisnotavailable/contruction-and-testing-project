document.addEventListener("DOMContentLoaded", function () {
  const sizeOptions = document.querySelectorAll(".size-option");

  sizeOptions.forEach((option) => {
    option.addEventListener("click", function () {
      sizeOptions.forEach((opt) => opt.classList.remove("selected-size"));
      this.classList.add("selected-size");
      document.getElementById("productSize").value = this.textContent;
      document.getElementById("productQuantity").value = number;
    });
  });
});