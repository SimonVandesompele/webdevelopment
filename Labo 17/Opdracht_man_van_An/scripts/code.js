const setup = () => {
    let zin = "De man van An geeft geen hand aan ambetante verwanten";
    let aantalKeerAn = 0;

    for (let i = 0; i < zin.length; i++)
    {
        if(zin.charAt(i) === 'a')
        {
            if(zin.charAt(i+1))
            {
                aantalKeerAn++;
                i++;
            }
        }
    }


    let result = document.getElementById('result')

    result.innerHTML = aantalKeerAn
}
window.addEventListener("load", setup);