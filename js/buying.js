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
let searchPage = document.querySelector(".search-icon");
searchPage.addEventListener("click", function () {
  location.href = "../resultSearch.html";
});
// Get the items from localStorage
let items = JSON.parse(localStorage.getItem("items")) || []; // Find the table element

let table = document.querySelector("table");

let tbody = document.querySelector("table tbody"); // Loop through the items and create a row for each one

items.forEach((item) => {
  let row = table.insertRow();

  let nameCell = row.insertCell(0);
  let priceCell = row.insertCell(1);
  let quantityCell = row.insertCell(2);
  let subTotalCell = row.insertCell(3);

  tbody.append(row);

  quantityCell.classList.add("counts");

  nameCell.innerHTML =
    `<i class="fa-solid fa-x remove-tr"></i>` +
    `<img src="../${item.img}"> ${item.name}`;
  priceCell.innerHTML = `<p class="price">${item.price}</p>`;

  quantityCell.innerHTML = `
  <div class="quantityValue">
    <i class="fa-solid fa-minus"></i>
    <input type="number" class="inputVal" value="${item.quantity}" disabled>
    <span class="spanVal"  style="display: none"> ${item.quantity} </span>
    <i class="fa-solid fa-plus"></i>
  </div>`;

  subTotalCell.innerHTML = `<p class="totalPrice">$${
    parseInt(item.price) * parseInt(item.quantity)
  }</p>`;

  let plus = quantityCell.querySelector(".fa-plus");
  let minus = quantityCell.querySelector(".fa-minus");
  let inpVal = quantityCell.querySelector(".inputVal");
  let spanVal = quantityCell.querySelector(".spanVal");
  plus.addEventListener("click", () => {
    item.quantity++;
    spanVal.textContent = item.quantity;
    inpVal.value = item.quantity;
  });

  minus.addEventListener("click", () => {
    item.quantity--;
    if (item.quantity <= 0) {
      item.quantity = 0;
    }
    spanVal.textContent = item.quantity;
    inpVal.value = item.quantity;
  });
});

let totalPrice = document.querySelectorAll(".totalPrice");
let updateBtn = document.querySelector(".update");

updateBtn.addEventListener("click", () => {
  let totalP = 0;

  totalPrice.forEach((total) => {
    let spanVal = total.parentElement.parentElement.querySelector(".spanVal");
    let price = total.parentElement.parentElement.querySelector(".price");
    let calculatedPrice =
      parseInt(spanVal.textContent) * parseInt(price.textContent);
    total.innerHTML = `<p class="totalPrice">${calculatedPrice}</p>`;

    totalP += calculatedPrice;
  });

  let endPrice = document.querySelector(".cart-total-price");
  let cartTotalPrice = document.querySelector(".last-price");
  endPrice.textContent = `${totalP}`;
  cartTotalPrice.textContent = `$${totalP}`;
  console.log(cartTotalPrice);
});

let totalP = 0;
totalPrice.forEach((total) => {
  let spanVal = total.parentElement.parentElement.querySelector(".spanVal");
  let price = total.parentElement.parentElement.querySelector(".price");
  let calculatedPrice =
    parseInt(spanVal.textContent) * parseInt(price.textContent);
  total.innerHTML = calculatedPrice;

  totalP += calculatedPrice;
});

let endPrice = document.querySelector(".cart-total-price");
let cartTotalPrice = document.querySelector(".last-price");
endPrice.textContent = `${totalP}`;
cartTotalPrice.textContent = `$${totalP}`;
console.log(endPrice.textContent);
let allTr = document.querySelectorAll("tbody tr");

allTr.forEach((e) => {
  let allTrBtn = e.querySelector(".remove-tr");
  let minusPrice = e.querySelector(".totalPrice");
  allTrBtn.addEventListener("click", () => {
    e.remove();
    let minusRemoveEle = (endPrice.textContent =
      parseInt(endPrice.textContent) - parseInt(minusPrice.textContent));
    minusRemoveEle -= minusPrice;
    cartTotalPrice.textContent = `$${endPrice.textContent}`;
  });
});
console.log(JSON.parse(localStorage.getItem("items")));
