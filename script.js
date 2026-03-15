var close = document.getElementById("close")
var offer = document.querySelector(".offer")
close.addEventListener("click", function () {
    offer.style.display = "none"
})

// Image slide
var Slideimg = document.getElementById("Slideimg")
var leftarrow = document.getElementById("leftarrow")
var rightarrow = document.getElementById("rightarrow")

var index = 0
var total = 3
rightarrow.addEventListener("click", function () {
    index++
    if (index >= total) {
        index = 0
    }
    Slideimg.style.transform = "translateX(-" + index * 100 + "%)"
})
leftarrow.addEventListener("click", function () {
    index--
    if (index < 0) {
        index = total - 1
    }
    Slideimg.style.transform = "translateX(-" + index * 100 + "%)"
})

// Heart functionality
var heart = document.querySelectorAll(".heart")
var redheart = document.querySelectorAll(".redheart")
for (let count = 0; count < heart.length; count++) {
    heart[count].addEventListener("click", function () {
        redheart[count].style.display = "block"
        heart[count].style.display = "none"
    })
    redheart[count].addEventListener("click", function () {
        redheart[count].style.display = "none"
        heart[count].style.display = "block"
    })
}

// New arrival

var newarrival = document.querySelectorAll(".Newarrival")
var arrival = document.querySelector(".arrival")
for (let count = 0; count < 2; count++) {
    newarrival[count].addEventListener("click", function () {
        arrival.scrollIntoView({
            behavior: "smooth"
        })
    })
}


// Most wanted

var mostwantedbtn = document.querySelectorAll(".mostwantedbtn")
var mostwanted = document.querySelector(".mostwanted")
for (let mount = 0; mount < 2; mount++) {
    mostwantedbtn[mount].addEventListener("click", function () {
        mostwanted.scrollIntoView({
            behavior: "smooth"
        })
    })
}


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

