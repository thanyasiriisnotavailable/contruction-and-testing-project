document.addEventListener("DOMContentLoaded", function () {
  const exitFullscreenButton = document.getElementById("exitFullscreenButton");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  exitFullscreenButton.style.display = "none";

  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function () {
    if (!navbarCollapse.classList.contains("show")) {
      exitFullscreenButton.style.display = "block";
    } else {
      exitFullscreenButton.style.display = "none";
    }
  });

  exitFullscreenButton.addEventListener("click", function () {
    navbarCollapse.classList.remove("show");
    exitFullscreenButton.style.display = "none";
  });
});
