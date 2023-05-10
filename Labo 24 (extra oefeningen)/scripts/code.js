
const setup = () => {
    let tafelKnop = document.getElementById("tafelKnop")
    tafelKnop.addEventListener("click", maakTabel)
}
const maakTabel = () => {
    let getal = document.getElementById("getal").value
    let blok = document.getElementById("blok")
    let tabeldiv = document.createElement("div")
    let div = document.createElement("div")
    let d = new Date()
    let headerText = document.createTextNode("Tafel van " + getal + " aangemaakt op " + d.toLocaleTimeString())
    if(!isNaN(getal))
    {
        blok.appendChild(tabeldiv).className = "tabel"
        tabeldiv.appendChild(div).className = "header"
        div.appendChild(headerText)
        for (let i = 1; i <= 10; i++)
        {
            let rijDiv = document.createElement('div');
            rijDiv.classList.add('rij');
            rijDiv.textContent = getal + " x " + i + " = " + getal*i;
            tabeldiv.appendChild(rijDiv);
        }
        document.getElementById("getal").value = ""
    }
    else {
        window.alert("Vul een getal in")
    }
}
window.addEventListener("load", setup);