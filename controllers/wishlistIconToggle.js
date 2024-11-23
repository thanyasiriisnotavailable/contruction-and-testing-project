// to handle click event on wishlist icon
document.addEventListener("DOMContentLoaded", function () {
  const wishlistIcons = document.querySelectorAll(".wishlist-icon");

  wishlistIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      icon.querySelector("i").classList.toggle("clicked"); // Toggle clicked class
    });
  });
});