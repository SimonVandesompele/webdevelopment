let global = {
   AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    LIJSTKAARTEN : ["images/kaart1.png","images/kaart2.png","images/kaart3.png","images/kaart4.png","images/kaart5.png","images/kaart6.png"],
    LEGELIJST : []
}
const setup = () => {
    let speelveld = document.createElement("div"); //maakt speelveld aan in de body met klasse "speelveld"
    speelveld.classList.add("speelveld");
    speelveld.className = "speelveld";
    document.body.appendChild(speelveld);

    for (let i = 0; i < global.AANTAL_HORIZONTAAL; i++) //maakt de rijen aan in het speelveld
    {
        let rij = document.createElement('div');
        speelveld.appendChild(rij);

        for (let i = 0; i < global.AANTAL_VERTICAAL; i++) //maakt de kolommen aan in het speelveld
        {
            let div = document.createElement("div")
            rij.appendChild(div)

                    let img = document.createElement("img"); //maakt de img tags aan binnen het speelveld met als src de achterkant van de uno fotos
                    img.src = "images/kaartAchterkant.png";
                    div.appendChild(img);

                    img.addEventListener("click", omdraaien); //als er op een kaart wordt geklikt wordt de methode "omdraaien" uitgevoerd

                }
            }

    for(let i = 1;i<= global.AANTAL_KAARTEN; i++ )  //genereert 6 verschillende kaartnamen (kaart1.png - kaart6.png)
    {
        global.LEGELIJST.push("images/kaart" + i + ".png" );
        global.LEGELIJST.push("images/kaart" + i + ".png" );    //wordt 2maal uitgevoerd omdat er 2 dezelfde kaarten in het spel moeten zittene
    }
    klik()
}

const randomKaarten = (lijst)=>{
    lijst.sort(() => 0.5 - Math.random())    //genereert willekeurige sources voor de kaarten

}
const klik = () => {
    let draaiKaartOm = document.getElementsByTagName("img")
    draaiKaartOm[0].addEventListener("click", function () {omdraaien(0)}) //als op de eerste kaart wordt geklikt wordt de omdraai methode uitgevoerd op deze kaart
    draaiKaartOm[1].addEventListener("click", function () {omdraaien(1)}) // " "
    draaiKaartOm[2].addEventListener("click", function () {omdraaien(2)}) // " "
    draaiKaartOm[3].addEventListener("click", function () {omdraaien(3)}) // " "
    draaiKaartOm[4].addEventListener("click", function () {omdraaien(4)}) // " "
    draaiKaartOm[5].addEventListener("click", function () {omdraaien(5)}) // " "
    draaiKaartOm[6].addEventListener("click", function () {omdraaien(6)}) // " "
    draaiKaartOm[7].addEventListener("click", function () {omdraaien(7)}) // " "
    draaiKaartOm[8].addEventListener("click", function () {omdraaien(8)}) // " "
    draaiKaartOm[9].addEventListener("click", function () {omdraaien(9)}) // " "
    draaiKaartOm[10].addEventListener("click", function () {omdraaien(10)}) // " "
    draaiKaartOm[11].addEventListener("click", function () {omdraaien(11)}) // " "

}
const omdraaien = (index) => {
    console.log("ik ben kaart " + index) //dit is om te testen als mijn methode werkt
}
window.addEventListener("load", setup);