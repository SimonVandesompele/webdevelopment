const setup = () => {
    let gemeentes = []
    let windowWaarde = ""
    do {
        windowWaarde = window.prompt("Gemeente", "")
        gemeentes.push(windowWaarde)
        console.log(gemeentes)
    } while (windowWaarde.toLowerCase() !== "stop")
    gemeentes.pop()
    gemeentes.sort()

    let lijst = document.getElementById("gemeente").value;
    lijst.innerHTML = gemeentes;
}
window.addEventListener("load", setup);
