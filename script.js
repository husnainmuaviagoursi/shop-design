const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("show");
});
let cartCount = 0;

const cartDisplay = document.getElementById("cartCount");
const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    cartCount++;
    cartDisplay.textContent = cartCount;

    alert(button.dataset.name + " added to your cart!");
  });
});
const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".filter.active").classList.remove("active");

    button.classList.add("active");

    const category = button.dataset.filter;

    products.forEach(function (product) {
      if (category === "All" || product.dataset.category === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

const form = document.getElementById("subscribeForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  message.textContent = "Thank you for subscribing to LUXE Fashion!";

  email.value = "";
});
