// links
// start header
let bars = document.querySelector(".main-bars i");
// get bars
let ulLinks = document.querySelector(".ul");
// get ul div
let xMark = document.querySelector(".x-mark i");
// get x-mark
let searchDiv = document.querySelector(".search-bar");
// get search bar div
let search = document.querySelector("i.sear");
// get search icon in search up
let xM = document.querySelector(".search-up i.x");
// get x-mark in search up
// icons i-search
let iSearch = document.querySelector("i.i-search");
// right active on search
let rightActive = document.querySelector(".searching");
// user icon
let user = document.querySelector(".contact i");
// right active on user
let userActive = document.querySelector(".user");
// cart icon
let cart = document.querySelector(".cart i");
// right active on cart
let cartActive = document.querySelector(".carts");
// overlay

let overlay = document.querySelector(".overlay"); // add active class on links

xMark.onclick = function () {
  ulLinks.classList.add("not-active");
  ulLinks.classList.remove("active");
};
bars.onclick = function () {
  ulLinks.classList.toggle("active");
  ulLinks.classList.remove("not-active");
  if (ulLinks.classList.contains("active")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
};
search.onclick = function () {
  searchDiv.classList.toggle("active-opacity");
  search.style.display = "none";
  xM.style.display = "block";
  overlay.style.display = "block";
};
xM.onclick = function () {
  searchDiv.classList.remove("active-opacity");
  xM.style.display = "none";
  search.style.display = "block";
  overlay.style.display = "none";
};
iSearch.onclick = function () {
  rightActive.classList.toggle("right-active");
  userActive.classList.remove("right-active");

  cartActive.classList.remove("right-active");
  if (rightActive.classList.contains("right-active")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
};
user.onclick = function () {
  userActive.classList.toggle("right-active");
  rightActive.classList.remove("right-active");

  cartActive.classList.remove("right-active");
  if (userActive.classList.contains("right-active")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
};
cart.onclick = function () {
  cartActive.classList.toggle("right-active");
  userActive.classList.remove("right-active");

  rightActive.classList.remove("right-active");
  if (cartActive.classList.contains("right-active")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
};

let allInp = document.querySelectorAll(".form input");
allInp.forEach((e) => {
  e.onblur = () => {
    if (e.value === "") {
      e.classList.add("is-invalid");
      e.classList.remove("is-valid");
    } else {
      e.classList.remove("is-invalid");
      e.classList.add("is-valid");
    }

    if (typeof e.value == "number") {
      e.classList.add("is-invalid");
    }
  };
});
