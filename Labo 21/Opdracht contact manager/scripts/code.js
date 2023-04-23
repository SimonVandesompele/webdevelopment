let personen = [];
let nieuwPersoon = false
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer()
    if (valideer() === true && nieuwPersoon === false) { //maakt pas een persoon aan als alle velden correct zijn ingevuld.
        let voornaamtxt = document.getElementById("txtVoornaam").value
        let familienaamtxt = document.getElementById("txtFamilienaam").value
        let geboortedatumtxt = document.getElementById("txtGeboorteDatum").value
        let emailtxt = document.getElementById("txtEmail").value
        let aantalKinderentxt = document.getElementById("txtAantalKinderen").value
        let persoon = {
            voornaam: voornaamtxt,
            familienaam: familienaamtxt,
            geboortedatum: geboortedatumtxt,
            email: emailtxt,
            aantalKinderen: aantalKinderentxt,
        }
        personen.push(persoon);

        let lstPersonen = document.getElementById("lstPersonen");
        while(lstPersonen.hasChildNodes()) { //heeft de lijst nog kinderen?
            lstPersonen.removeChild(lstPersonen.firstChild)
        }
        for (let i = 0; i < personen.length; i++) {
            let option = document.createElement("option")
            option.appendChild(document.createTextNode(personen[i].voornaam + " " + personen[i].familienaam))
            option.setAttribute("value", JSON.stringify(personen[i]))
            lstPersonen.appendChild(option)

        }
    }
    else {
        if (valideer() === true) {
            let lstPersonen = document.getElementById("lstPersonen");
            const index = lstPersonen.selectedIndex
            const option = lstPersonen.options[index]

            let voornaamtxt = document.getElementById("txtVoornaam").value
            let familienaamtxt = document.getElementById("txtFamilienaam").value
            let geboortedatumtxt = document.getElementById("txtGeboorteDatum").value
            let emailtxt = document.getElementById("txtEmail").value
            let aantalKinderentxt = document.getElementById("txtAantalKinderen").value

            let bewerktPersoon = {
                voornaam: voornaamtxt,
                familienaam: familienaamtxt,
                geboortedatum: geboortedatumtxt,
                email: emailtxt,
                aantalKinderen: aantalKinderentxt,
            }
            personen.push(bewerktPersoon)
            personen[option.id] = bewerktPersoon;
            option.text = bewerktPersoon.voornaam + " " + bewerktPersoon.familienaam;
        }
    }



    // valideer alle input data en controleer of er geen errors meer zijn

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    clearAllErrors();
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    nieuwPersoon = false;
};

const persoonLijstKlik = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    const index = lstPersonen.selectedIndex
    const option = lstPersonen.options[index];
    let selectPersoon = JSON.parse(option.value);
    document.getElementById("txtVoornaam").value = selectPersoon.voornaam;
    document.getElementById("txtFamilienaam").value = selectPersoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = selectPersoon.geboortedatum;
    document.getElementById("txtEmail").value = selectPersoon.email;
    document.getElementById("txtAantalKinderen").value = selectPersoon.aantalKinderen;
    nieuwPersoon = true;
}

const persoonBewerken = () => {

}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", persoonLijstKlik)
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);