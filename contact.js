var close = document.getElementById("close")
var offer = document.querySelector(".offer")
close.addEventListener("click", function () {
    offer.style.display = "none"
})

// Menu
var menu = document.querySelector(".menu")
var sidenavbar = document.querySelector(".sidenavbar")
menu.addEventListener("click", function () {
    sidenavbar.style.left = 0
})

var X = document.querySelector(".X")
X.addEventListener("click", function () {
    sidenavbar.style.left = "-50%"
})