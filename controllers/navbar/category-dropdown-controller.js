document.addEventListener("DOMContentLoaded", function () {
  fetch("/categories")
    .then((response) => response.json())
    .then((categories) => {
      const categoryDropdown = document.getElementById("categoryDropdown");
      categories.forEach((category) => {
        const categoryItem = document.createElement("li");
        categoryItem.innerHTML = `<a class="dropdown-item" href="/category-page-layout?category_id=${
        category.category_id}&category_name=${category.category_name}">${category.category_name}</a>`;
        categoryDropdown.appendChild(categoryItem);
      });
      const viewAllCategoryItem = document.createElement("li");
      viewAllCategoryItem.innerHTML = `<a class="dropdown-item" href="/all-product">View all</a>`;
      categoryDropdown.appendChild(viewAllCategoryItem);
    })
    .catch((error) => console.error("Error fetching categories:", error));
});
