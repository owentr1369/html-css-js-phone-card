const btn = document.querySelectorAll("button");
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
  let trContent = ` <td> <img src=${productImg} alt="" />}<h3>${productName}</h3></td>
  <td>
    <p><span>${productPrice}</span><sup>đ</sup></p>
  </td>
  <td><input type="number" value="1" min="0" /></td>
  <td style="cursor: pointer">Xoá</td>`;
  addTrTag.innerHTML = trContent;
  let cartTable = document.querySelector("tbody");

  cartTable.append(addTrTag);
};
