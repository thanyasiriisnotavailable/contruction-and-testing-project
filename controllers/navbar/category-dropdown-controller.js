document.addEventListener("DOMContentLoaded", function () {
  console.log("Fetching categories...");

  fetch("/category/categories")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json();
    })
    .then((categories) => {
      console.log("Categories fetched:", categories);

      const categoryDropdown = document.getElementById("categoryDropdown");
      if (!categoryDropdown) {
        console.error("Category dropdown element not found");
        return;
      }

      categoryDropdown.innerHTML = ""; 

      categories.forEach((category) => {
        const categoryItem = document.createElement("li");
        categoryItem.innerHTML = `
          <a class="dropdown-item" href="/category-page-layout?category_id=${category.category_id}&category_name=${encodeURIComponent(
          category.category_name
        )}">
            ${category.category_name}
          </a>`;
        categoryDropdown.appendChild(categoryItem);
      });

      const viewAllCategoryItem = document.createElement("li");
      viewAllCategoryItem.innerHTML = `<a class="dropdown-item" href="/all-product">View all</a>`;
      categoryDropdown.appendChild(viewAllCategoryItem);
    })
    .catch((error) => console.error("Error fetching categories:", error));
});
