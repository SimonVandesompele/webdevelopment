const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}
const kopieer = () => {
    let inputTekst = document.getElementById("txtInput").value
    let tekst = inputTekst.toString();
    let outputTekst = document.getElementById("txtOutput")
    outputTekst.innerHTML = tekst;

}
window.addEventListener("load", setup);
