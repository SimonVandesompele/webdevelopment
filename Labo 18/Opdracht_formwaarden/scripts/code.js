const setup = () => {
    let button = document.getElementById("resultaat")
    button.addEventListener("click", toonResultaat)
}
window.addEventListener("load", setup);

const toonResultaat = () => {

    let roker = document.getElementById("roker").checked

    if(roker === true)
    {
        console.log("is een roker")
    }
    else
    {
        console.log("is geen roker")
    }

    console.log("moedertaal is")
    console.log("favoriete buurland is")
    console.log("bestellingen bestaat uit")
}