"use strict";
const pos = document.querySelectorAll('.row');
var logo = "O";
pos.forEach(pos => pos.addEventListener("click", () => {
    CHECK();
    if (pos.innerHTML == "") {
        const x = document.createElement("h1");
        pos.appendChild(x);
        x.classList.add(logo + "-item");
        x.innerHTML = logo;
    }
    function CHECK() {
        if (logo == "X") {
            logo = "O";
        }
        else {
            logo = "X";
        }
    }
}));
