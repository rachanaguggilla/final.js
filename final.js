const filter = document.getElementById("categoryFilter");
const sort = document.getElementById("priceSort");
const productContainer = document.querySelector(".products");
let products = Array.from(document.querySelectorAll(".product"));

filter.addEventListener("change", () => {
  const category = filter.value;
  products.forEach(product => {
    const match = category === "all" || product.dataset.category === category;
    product.style.display = match ? "block" : "none";
  });
});

sort.addEventListener("change", () => {
  const order = sort.value;
  let sorted = [...products];

  if (order === "asc") {
    sorted.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (order === "desc") {
    sorted.sort((a, b) => b.dataset.price - a.dataset.price);
  }

  productContainer.innerHTML = "";
  sorted.forEach(product => productContainer.appendChild(product));
});

products.forEach(product => {
  product.querySelector("button").addEventListener("click", () => {
    alert("Added to cart!");
  });
});
