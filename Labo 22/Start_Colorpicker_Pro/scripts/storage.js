let global = {
    lijst : []
}

const storeSliderValues = () => {
    let rood = document.getElementById("sldRed").value;
    let groen = document.getElementById("sldGreen").value;
    let blauw = document.getElementById("sldBlue").value;

    localStorage.setItem('rood.value', rood)
    localStorage.setItem('groen.value', groen)
    localStorage.setItem('blauw.value', blauw)
};

const restoreSliderValues = () => {
    document.getElementById('sldRed').value = localStorage.getItem('rood.value')
    document.getElementById('sldGreen').value = localStorage.getItem('groen.value')
    document.getElementById('sldBlue').value = localStorage.getItem('blauw.value')
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let rood = document.getElementById("sldRed").value;
    let groen = document.getElementById("sldGreen").value;
    let blauw = document.getElementById("sldBlue").value;
    // programmeren dat als er eentje verwijdert wordt ook uit de lijst wordt gehaald. !!!!!!!!!!!!!!
    let swatchObject = {
        red : rood,
        green : groen,
        blue : blauw
    }
    global.lijst.push(swatchObject);
    let string = JSON.stringify(global.lijst)
    localStorage.setItem("lijst", string)

};

const restoreSwatches = () => {

let lijst = localStorage.getItem("lijst");
    let lijstParse =JSON.parse(lijst)
for(let i = 0; i < lijstParse.length; i++)
{

    let swatch = buildSwatchComponent(lijstParse[i].red, lijstParse[i].green, lijstParse.blue);
    document.getElementById("swatchComponents").append(swatch);
}
};
