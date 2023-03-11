const setup = () =>
{
    MaakMetSpaties("ikHouVan3uurWebdev Op Een Woensdag")
}
window.addEventListener("load", setup);

const MaakMetSpaties = (inputText) => {

    inputText.replaceAll(' ', '')
    let result="";

    for (let i = 0; i < inputText.length; i++)
    {
        result += inputText.charAt(i) + ' '
    }

    console.log(result)
    return result
}