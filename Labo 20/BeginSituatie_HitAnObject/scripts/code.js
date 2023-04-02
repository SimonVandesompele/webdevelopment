let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 1000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let object = document.getElementById("target");
    let startknop = document.getElementById("startknop")
    startknop.addEventListener("click", startSpel)
    object.setAttribute("src", global.IMAGE_PATH_PREFIX + Math.round(Math.random()*4) + global.IMAGE_PATH_SUFFIX) //verandert de image aan de start van het spel (zodat het niet telkens een bom is).

};

const startSpel = () =>
{
    let startknop = document.getElementById("startknop")
    startknop.remove() //verwijdert de startknop zodat het niet meer in de weg van het speelveld staat
    let object = document.getElementById("target");
    object.addEventListener("click", isBom) //checkt als het object een bom is, zo niet dan +1
    global.timeoutId = setInterval(elkeSecondeTimer, global.MOVE_DELAY) //start een timer



}

const alert = () => { //toont een melding dat het spel gedaan is
        window.alert("GAME OVER, score: " + global.score);
}

const moveObject = () => { //zorgt ervoor dat het object verplaatst binnen het aangemaakte speelveld

    let object=document.getElementsByClassName("object")[0];
    let playfield=document.getElementById("playField");
    let maxLeft=playfield.clientWidth - object.offsetWidth;
    let maxHeight=playfield.clientHeight - object.offsetHeight;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    object.style.left=left+"px";
    object.style.top=top+"px";
}

const changeImg = () => //zorgt ervoor dat de image van het object wordt aangepast
{
    let newImage = global.IMAGE_PATH_PREFIX + Math.round(Math.random()*4) + global.IMAGE_PATH_SUFFIX //creeert een nieuwe src aan zodat de image verandert.
    let object = document.getElementById("target").src = newImage   //verandert de waarde van de image
}
const elkeSecondeTimer = () => { //een timer die elke seconde het object verplaatst + de image ervan verandert
    moveObject(); //roept methode moveObject op
    changeImg();    //roept methode changeImg op
}

const isBom = () =>
{
    let klikOpObject = document.getElementById("target")

    if (klikOpObject.getAttribute("src") === global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX) //checkt als de source van de current image gelijk is als dat van een bom.
    {
        alert() //heeft een melding als het een bom is
        clearInterval(global.timeoutId) //stopt de timer van het spel
    }
    else
    {
        global.score += 1 //+1 bij globale variabele
        let score = document.getElementById("punten")
        score.innerHTML = global.score //past de score in de html aan
        clearInterval(global.timeoutId)
        global.timeoutId = setInterval(elkeSecondeTimer, global.MOVE_DELAY) //stelt timer opnieuw in, telkens wanneer er geklikt wordt
        moveObject() //verplaatst object
        changeImg() //verandert de image
    }
}


window.addEventListener("load", setup);

