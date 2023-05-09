const hled = document.getElementById('hleb')
const ff = document.getElementById("ff")
const POLE = document.getElementById("POLE")
const rar = document.getElementById("rar")
const ehehhe = document.getElementById("ehehhe")
const rer = document.getElementById("rer")
//POLE.innerHTML = "<div></div>".repeat(100)
//let cell = document.querySelectorAll(".POLE div")
let ahahaha = "#000000"
let gg
let cell
generate(10)

ehehhe.onclick = () => {
    gg = rer.value
    generate(gg)
}
ff.onclick = () => {
    ahahaha = hleb.value
    ff.style.backgroundColor = ahahaha
}


rar.onclick = () => {
    cell.forEach(element => {
        element.style.backgroundColor = "#ffffff"
    })
}

/*-----*/

function aab() {
    this.style.backgroundColor = ahahaha
}
function generate(gg) {
    POLE.style.height = 25 * gg + "px"
    POLE.style.width = 25 * gg + "px"
    POLE.innerHTML = ""
    POLE.innerHTML = "<div></div>".repeat(gg * gg)
    cell = document.querySelectorAll(".POLE div")
    cell.forEach(element => {
        element.addEventListener("click", aab)
    });
}