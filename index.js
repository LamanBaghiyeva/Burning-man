const burger = document.querySelector(".fa-bars")
const closed = document.querySelector(".fa-xmark")
const canvas = document.querySelector(".offCanvas")
const button = document.querySelector(".navbar-toggler")


burger.addEventListener("click", openCanvasmenu)
closed.addEventListener("click", closeCanvasmenu)

function openCanvasmenu() {
    canvas.classList.add("aktiv")
    button.style.display = "none"
}

function closeCanvasmenu() {
    canvas.classList.remove("aktiv")
    button.style.display = "block"
}


// Typing Effect

const h1Element = document.getElementsByTagName("h1")[0]
let i = 0
const text = 'Burning MAN'
const speed = 120

function typingEffect() {
    if (i < text.length) {
        h1Element.innerHTML += text.charAt(i)
        i++
        setTimeout(typingEffect,speed)
    }
}
document.addEventListener("DOMContentLoaded", typingEffect)