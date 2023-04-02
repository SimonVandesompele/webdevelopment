const setup = () => {
    let familieleden = ["Beatrijs", "Jan", "Cedric", "Jean-pierre", "Geert"]
    let aantalFamilieleden = familieleden.length;

    console.log("dit is de methode printFamilielid")
    printFamilielid();
    console.log("dit is de methode voegNaamToe")
    voegNaamToe();
    console.log("dit is de methode ConverteerNaarString")
    ConverteerNaarString;

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
        familieleden.toString()
        console.log(familieleden)
    }
}
window.addEventListener("load", setup);



