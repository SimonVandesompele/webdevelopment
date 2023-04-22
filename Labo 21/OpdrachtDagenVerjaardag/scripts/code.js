const setup = () => {
    let geboortedatum = new Date('07/22/2004');
    let vandaag = new Date();

    const aantalDagen = () =>{
        let verschilDagen = geboortedatum.getTime() - vandaag.getTime();
        return Math.ceil(verschilDagen / (1000 * 3600 * 24));

    }
    console.log(Math.abs(aantalDagen(geboortedatum, vandaag)));
}
window.addEventListener("load", setup);