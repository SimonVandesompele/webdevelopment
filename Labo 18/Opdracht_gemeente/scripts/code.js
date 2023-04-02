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

    let lijst = document.getElementById("gemeente")
    let code = ""
    for (let i = 0; i < gemeentes.length; i++) {
        code += "<option>"+ gemeentes[i]+ "</option>"
    }
    lijst.innerHTML = code

}
window.addEventListener("load", setup);
