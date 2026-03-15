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

var checkboxes = document.querySelectorAll('input[name="product"]')
var products = document.querySelectorAll(".product")

checkboxes.forEach(function (box) {

    box.addEventListener("click", function () {

        var activeFilters = []

        checkboxes.forEach(function (cb) {
            if (cb.checked) {
                activeFilters.push(cb.value)
            }
        })

        products.forEach(function (item) {

            var text = item.textContent.toLowerCase()

            var show = activeFilters.some(function (filter) {
                return text.includes(filter)
            })

            if (activeFilters.length === 0 || show) {
                item.style.display = "block"
            }
            else {
                item.style.display = "none"
            }

        })

    })

})

