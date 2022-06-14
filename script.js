const btn = document.querySelectorAll("button");
const deleteBtn = document.getElementById("delete");
console.log(btn);

btn.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    let btnItem = e.target;
    let product = btnItem.parentElement;

    let productImg = product.querySelector("img").src;
    let productName = product.querySelector("h1").innerText;

    let productPrice = product.querySelector("span").innerText;

    addToCart(productImg, productName, productPrice);
  });
});

const addToCart = (productImg, productName, productPrice) => {
  let addTrTag = document.createElement("tr");
  let trContent = ` <td> <img src=${productImg} alt="" /><h3>${productName}</h3></td>
  <td>
    <p><span>${productPrice}</span><sup>đ</sup></p>
  </td>
  <td><input type="number" value="1" min="0" /></td>
  <td style="cursor: pointer">Xoá</td>`;
  addTrTag.innerHTML = trContent;
  let cartTable = document.querySelector("tbody");

  cartTable.append(addTrTag);
  cartTotal();
};
// Total price calculation
const cartTotal = () => {
  let cartItem = document.querySelectorAll("tbody tr");
  let totalC = 0;
  //   console.log(cartItem);

  for (let i = 0; i < cartItem.length; i++) {
    let inputValue = cartItem[i].querySelector("input").value;
    let productPrice = cartItem[i].querySelector("span").innerText;
    // console.log(productPrice);
    let totalA = 0;
    totalA += inputValue * productPrice;
    totalC += totalA;
  }
  var cartTotal = document.querySelector(".price-total span");
  cartTotal.innerHTML = totalC;
  //   console.log(totalC);
};
