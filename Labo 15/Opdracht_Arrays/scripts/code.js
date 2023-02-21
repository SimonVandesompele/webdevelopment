const setup = () => {
}
window.addEventListener("load", setup);

let familieleden = ["Beatrijs", "Jan", "Cedric", "Jean-pierre", "Geert"]
let aantalFamilieleden = familieleden.length;

function printFamilielid()
{
    for(let i = 0; i < familieleden.length; i += 2)
    {
        console.log(familieleden[i])
    }
}

function voegNaamToe()
{
    let familielid = prompt("Geef nog een familielid op", "");
    if (familielid != null) {
        familieleden.push(familielid)
        console.log(familieleden)
    }
}

function ConverteerNaarString()
{
    familieleden.join()
    console.log(familieleden)
}