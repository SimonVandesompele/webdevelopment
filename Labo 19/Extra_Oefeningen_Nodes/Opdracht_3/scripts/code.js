const setup = () => {
    let paragraaf = document.createElement("p");
    let tekstnode = document.createTextNode("dit is een paragraaf");
    paragraaf.appendChild(tekstnode);

    let id = document.getElementById("myDIV");
    id.appendChild(paragraaf);
}
window.addEventListener("load", setup);