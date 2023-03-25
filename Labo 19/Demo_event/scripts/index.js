const setup = () => {
    let texts=document.querySelectorAll(".text"); //maakt een lijst aan met alle .tekst
	for (let i=0;i<texts.length;i++) {
		texts[i].addEventListener("click", klik); //maakt van alle .text elementen er een "knop" van zodat we er op kunnen klikken
	}	
}


const klik = (event) => {
	event.target.style.color="red";
};

window.addEventListener("load", setup);