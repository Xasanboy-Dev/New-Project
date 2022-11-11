const one = document.querySelector("#first")
const two = document.querySelector("#second")
let r = 0
function first() {
    r++
    if (r % 2 == 1) {
        one.type = "text"
        one.value = one.value
        document.querySelector(".one").style.borderColor = "black"
        document.querySelector(".one").style.backgoundColor = "white"
    } else {
        one.type = "password"
        one.value = one.value
        document.querySelector(".one").style.borderColor = "white"
        document.querySelector(".one").style.backgoundColor = "black"
    }
}

let w = 0
function second() {
    w++
    if (w % 2 == 1) {
        two.type = "text"
        two.value = two.value
         document.querySelector(".two").style.color = "black"
         document.querySelector(".two").style.backgoundColor = "white"
    } else {
        two.type = "password"
        two.value = two.value
        document.querySelector(".two").style.color = "white"
        document.querySelector(".two").style.backgoundColor = "black"
    }
}