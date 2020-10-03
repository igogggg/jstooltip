"use strict";
let box = document.querySelector("#box");

document.querySelectorAll(".num").forEach((num) => {
    num.addEventListener("click", function() {
        calc(this.value);
    });
});

let output = document.querySelector(".output");

function calc(value) {
    if (value === "CE") {
        output.textContent = "";
    } else if (value === "=") {
        output.textContent = eval(output.textContent);
    } else if (output.textContent == "0") {
        output.textContent = value;
    } else {
        output.textContent += value;
    }
}