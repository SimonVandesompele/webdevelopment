const setup = () => {
    let paragraaf = document.getElementsByTagName("p");
    for (let i = 0; paragraaf.length; i++)
    {
        if(paragraaf[i].className === "belangrijk")
        {
            paragraaf[i].className = "opvallend"
        }
    }

}
window.addEventListener("load", setup);