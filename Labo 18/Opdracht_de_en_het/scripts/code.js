const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let tekstSplit = tekst.split(" ");

    for (let i = 0; i < tekstSplit.length; i++)
    {
        if(tekstSplit[i] == "de")
        {
            tekstSplit[i] = "het"
        }
    }
    console.log(tekstSplit.join(" "))
}
window.addEventListener("load", setup);