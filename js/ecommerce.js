// start header
// links
// get bars
let bars = document.querySelector(".main-bars i");
// get ul div
let ulLinks = document.querySelector(".ul");
// get x-mark
let xMark = document.querySelector(".x-mark i");
console.log(xMark);
// get search bar div
let searchDiv = document.querySelector(".search-bar");
// get search icon in search up
let search = document.querySelector("i.sear");
// get x-mark in search up
let xM = document.querySelector(".search-up .x");
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
let overlay = document.querySelector(".overlay");

// add active class on links
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
  if (ulLinks.classList.contains("active")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
  console.log("click");
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

// document.addEventListener("click", (event) => {
//   if (
//     event.target !== iSearch &&
//     event.target !== user &&
//     event.target !== cart &&
//     event.target !== search &&
//     event.target !== bars
//   ) {
//     rightActive.classList.remove("right-active");
//     userActive.classList.remove("right-active");
//     cartActive.classList.remove("right-active");
//     ulLinks.classList.remove("active");
//     searchDiv.classList.remove("active-opacity");
//     if (searchDiv.classList.contains("active-opacity")) {
//       xM.style.display = "block";
//       search.style.display = "none";
//     } else {
//       xM.style.display = "none";
//       search.style.display = "block";
//     }
//     overlay.style.display = "none";
//   }
// });
let searchPage = document.querySelector(".search-icon");
searchPage.addEventListener("click", function () {
  location.href = "../resultSearch.html";
});
// end header

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
// end featured
let switcherLis = document.querySelectorAll(".best ul li");
let imgs = document.querySelectorAll(".img");

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active-color");
    this.classList.add("active-color");
  });
}

function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
// end best seller

// start search bar
let searching = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search-icon");
searchBtn.addEventListener("click", () => {
  let filter = searching.value.toLowerCase();
  let allP = document.querySelectorAll(".decr");

  allP.forEach((e) => {
    let text = e.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      e.style.display = "";
    } else {
      e.style.display = "none";
    }
  });
});
// end search bar

// scroll to top
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
