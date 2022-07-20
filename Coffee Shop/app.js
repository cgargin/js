let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  seacrhForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let seacrhForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  seacrhForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  seacrhForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  seacrhForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  seacrhForm.classList.remove("active");
  cartItem.classList.remove("active");
};


//////////////////////////////////////About US


