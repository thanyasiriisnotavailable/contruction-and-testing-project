document.addEventListener("DOMContentLoaded", function () {
  const contactUsLink = document.querySelector('a[href="form"]');
  const ourStoreLink = document.querySelector('a[href="our-store"]');
  const formContainer = document.querySelector(".form-container");
  const infoShop = document.querySelector(".infoshop");

  function hideAllSections() {
    formContainer.style.display = "none";
    infoShop.style.display = "none";
  }

  // Add click event listener for Contact Us link
  contactUsLink.addEventListener("click", function (e) {
    e.preventDefault(); 
    hideAllSections(); 
    formContainer.style.display = "block"; 
  });

  // Add click event listener for Our Store link
  ourStoreLink.addEventListener("click", function (e) {
    e.preventDefault(); 
    hideAllSections();
    infoShop.style.display = "block"; 
  });

  hideAllSections();
});