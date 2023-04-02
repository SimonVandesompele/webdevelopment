const setup = () => {
    let Wijzig = document.getElementById("wijzig")
    document.addEventListener("click", wijzig)
}
const wijzig = () => {
    let pElement = document.getElementById("txtOutput")
    pElement.innerHTML = "Welkom!"

}
window.addEventListener("load", setup);