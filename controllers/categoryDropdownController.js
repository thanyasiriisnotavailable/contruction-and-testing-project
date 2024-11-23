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
