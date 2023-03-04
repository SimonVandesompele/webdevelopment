const setup = () => {
    let red = document.getElementsByClassName("red");
    let green = document.getElementsByClassName("green");
    let blue = document.getElementsByClassName("blue");
    let box = document.getElementsByClassName("color");



    green[0].addEventListener("change", update)
    green[0].addEventListener("input", update)
    blue[0].addEventListener("change", update)
    blue[0].addEventListener("input", update)
    red[0].addEventListener("change", update)
    red[0].addEventListener("input", update)
    box[0].style.backgroundColor="rgb(0,0,0)";

}


const update = () => {
    let red = document.getElementsByClassName("red");
    let green = document.getElementsByClassName("green");
    let blue = document.getElementsByClassName("blue");
    let box = document.getElementsByClassName("color");
    let redtxt = document.getElementsByClassName("redText");
    let greentxt = document.getElementsByClassName("greenText");
    let bluetxt = document.getElementsByClassName("blueText");

    redtxt[0].innerHTML = red[0].value

    greentxt[0].innerHTML = green[0].value

    bluetxt[0].innerHTML = blue[0].value

    box[0].style.backgroundColor=`rgb(${red[0].value},  ${green[0].value},${blue[0].value}`;
}
window.addEventListener("load", setup);