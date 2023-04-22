const setup = () => {
    let student={
        voornaam : "Simon",
        familienaam : "Vandesompele",
        geboorteDatum : new Date("2004-07-22"),
        adres : {
            straat : "TimboektoeStraat 13",
            postcode : "6969",
            gemeente : "Kortrijk"
        },
        isIngeschreven : false,
        namenVanVrienden : ["Sam", "Cedric", "Theo", "Karel"],
        aantalVingers : 10
    }
    let string = JSON.stringify(student)
    console.log(string)
}
window.addEventListener("load", setup);