const setup = () => {
    let gemeentes = []
    let windowWaarde = ""
    do {
        windowWaarde = window.prompt("Gemeente", "")
        gemeentes.push(windowWaarde)
        console.log(gemeentes)
    } while (windowWaarde.toLowerCase() !== "stop")
    gemeentes.pop()
    console.log(gemeentes)
    let lijst = document.getElementById("gemeente");
    lijst.innerHTML = gemeentes;
}
window.addEventListener("load", setup);
