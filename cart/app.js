//Обработчик на кнопки добавить в корзину

let btns = document.getElementsByClassName("addtocart");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        addToCart(this);
    });
}

let getprice; // записываем в переменные данные карточки
let getproductName;
let getIdName;
let count = 0;
let sum = 0;
// Функция находит описание в карточке записывает данные в корзину
function addToCart(elem) {
    count++;

    while ((elem = elem.previousSibling)) {
        if (elem.className == "price") {
            getprice = elem.textContent;
        }
        if (elem.className == "productname") {
            getproductName = elem.textContent;
        }
        if (elem.className == "id") {
            getIdName = elem.textContent;
        }
    }

    cartName.textContent += " " + getproductName + ",";
    cartId.textContent += " " + getIdName + ",";
    cartPrice.textContent += " " + getprice + ",";
    cartTotal.textContent = count;
    sum += +getprice;
    totalPrice.textContent = sum;
    cartBtn.classList.add("cart_btn_visibil");
    cartShow.classList.add("cart_visibil");
    return sum;
}
let cartName = document.querySelector(".cart_name");
let cartId = document.querySelector(".cart_id");
let cartPrice = document.querySelector(".cart_price");
let cartTotal = document.querySelector(".cart_total");
let cartBtn = document.querySelector(".cart_btn");
let totalPrice = document.querySelector(".total_price");
let cartShow = document.querySelector(".cart");
let empty = document.querySelector(".empty");
// Очистка корзины
empty.addEventListener("click", function clearEmpty() {
    cartName.textContent = " ";
    cartId.textContent = " ";
    cartPrice.textContent = " ";
    cartTotal.textContent = "";
    totalPrice.textContent = "";
});
//Скрытие корзины
cartBtn.addEventListener("click", function clothCart() {
    if (cartShow.classList == "cart") {
        cartShow.classList.add("cart_visibil");
    } else {
        cartShow.classList.remove("cart_visibil");
    }
});