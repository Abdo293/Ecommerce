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
  if (ulLinks.classList.contains("active")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
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

// end header

// start shop
// start featured
let btnToAddToCart = document.querySelectorAll(".add-to-cards");

btnToAddToCart.forEach((e) => {
  let imgToAddToCart = e.parentElement.querySelector("img").cloneNode(true);
  let productName = e.parentElement.querySelector(".decr").cloneNode(true);

  let productDiv = document.querySelector(".product");
  let prodDiv = document.createElement("div");
  prodDiv.classList.add("prodc");

  let spanPrice = document.createElement("span");
  spanPrice.classList.add("price");

  let productCounter = 0;

  let productPrice = e.parentElement.querySelector(".totalPrice");

  let txtDiv = document.createElement("div");
  txtDiv.classList.add("prodText");
  let totalDiv = document.getElementById("subtotal");
  let minPlusDiv = document.createElement("div");
  minPlusDiv.classList.add("min-plus");

  let countSpan = document.createElement("span");
  countSpan.classList.add("count");

  let xSpan = document.createElement("span");
  xSpan.classList.add("x");

  let doneP = document.createElement("p");
  doneP.style.cssText =
    "color: green; text-align: center; padding: 0; margin-bottom: 0";
  doneP.innerHTML = `Added to basket <i class="fa-solid fa-circle-check"></i>`;

  e.onclick = function () {
    productCounter++;
    productDiv.append(prodDiv);
    prodDiv.append(imgToAddToCart);
    prodDiv.append(txtDiv);
    txtDiv.append(productName);
    txtDiv.append(minPlusDiv);
    minPlusDiv.append(countSpan);
    minPlusDiv.append(xSpan);
    minPlusDiv.append(spanPrice);
    countSpan.textContent = `${productCounter}`;
    xSpan.textContent = `x`;
    spanPrice.textContent = `$${productPrice.textContent}`;
    totalDiv.textContent =
      parseInt(totalDiv.textContent) + parseInt(productPrice.textContent);
    let productLength = document.querySelector(".length");
    let totalSpan = document.querySelectorAll(".count");
    productLength.textContent = totalSpan.length;

    e.before(doneP);
    // Create an object to store the product information
    let product = {
      img: imgToAddToCart.getAttribute("src"),
      name: productName.textContent,
      price: productPrice.textContent,
      quantity: parseInt(countSpan.textContent),
    };

    // Get the existing items from localStorage or create an empty array
    let items = JSON.parse(localStorage.getItem("items")) || [];

    // Check if the product already exists in the array
    let existingProductIndex = items.findIndex(
      (item) => item.name === product.name
    );
    if (existingProductIndex >= 0) {
      // If the product already exists, update the quantity
      items[existingProductIndex].quantity = parseInt(countSpan.textContent);
    } else {
      // If the product doesn't exist, add it to the array
      items.push(product);
    }

    // Store the updated items array in localStorage
    localStorage.setItem("items", JSON.stringify(items));
  };
});
// end shop

let searchInp = document.querySelector(".searching input");
let productName = document.querySelectorAll(".decr");
let myResult = [];

searchInp.onkeyup = function () {
  productName.forEach((e) => {
    searchInp.value.toLowerCase();
    if (e.textContent.toLowerCase().includes(searchInp.value)) {
      e.parentElement.parentElement.style.display = "flex";
    } else {
      e.parentElement.parentElement.style.display = "none";
    }
    if (searchInp.value === "") {
      e.parentElement.parentElement.style.display = "flex";
    }
  });
};

let searchMobile = document.querySelector(".search-bar input");
console.log(searchMobile);
searchMobile.onkeyup = function () {
  productName.forEach((e) => {
    searchMobile.value.toLowerCase();
    if (e.textContent.toLowerCase().includes(searchMobile.value)) {
      e.parentElement.parentElement.style.display = "flex";
    } else {
      e.parentElement.parentElement.style.display = "none";
    }
    if (searchMobile.value === "") {
      e.parentElement.parentElement.style.display = "flex";
    }
  });
};

// scroll top
let scrollTop = document.querySelector(".scroll");
window.onscroll = function () {
  this.scrollY >= 600
    ? scrollTop.classList.add("show")
    : scrollTop.classList.remove("show");
};
scrollTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
