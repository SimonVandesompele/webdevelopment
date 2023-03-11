const setup = () =>
{
    let button = document.getElementById('knop')
    button.addEventListener('click', spatie)
}

window.addEventListener("load", setup);

const spatie = () =>
{
    let tekst = document.getElementById('tekst').value.replaceAll(' ','')
    let tekstZonderSpatie = ''

    for (let i = 0; i < tekst.length; i++)
    {
        tekstZonderSpatie += tekst.charAt(i) + ' '
    }
    console.log(tekstZonderSpatie)
}