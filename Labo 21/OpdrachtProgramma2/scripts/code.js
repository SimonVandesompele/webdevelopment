const setup = () => {
    let student = JSON.parse('{"voornaam":"Simon","familienaam":"Vandesompele","geboorteDatum":"2004-07-22T00:00:00.000Z","adres":{"straat":"TimboektoeStraat 13","postcode":"6969","gemeente":"Kortrijk"},"isIngeschreven":false,"namenVanVrienden":["Sam","Cedric","Theo","Karel"],"aantalVingers":10}')
    console.log(student.aantalVingers)
}
window.addEventListener("load", setup);