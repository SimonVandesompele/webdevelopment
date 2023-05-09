const setup = () => {
    let zoekKnop = document.getElementById("zoekbalkKnop")
    zoekKnop.addEventListener("click",zoek);

}
const zoek = () =>
{
    let zoekBalkText = document.getElementById("zoekOpdracht").value;
    let prefix = zoekBalkText.substring(0,3).replaceAll(" ", "");
    console.log(prefix)
    let zoekopdracht = zoekBalkText.substring(3);

    if(prefix.toLowerCase().startsWith("/y"))
    {
        window.open("https://www.youtube.com/results?search_query=" + zoekopdracht);
    }
    else if(prefix.toLowerCase().startsWith("/g"))
    {
        window.open("https://www.google.com/search?q=" + zoekopdracht);
    }
    else if(prefix.toLowerCase().startsWith("/i"))
    {
        window.open("https://www.instagram.com/explore/tags/" + zoekopdracht.replaceAll(" ", "") +"/"); // zoekt de tags in instagram
    }
    else if(prefix.toLowerCase().startsWith("/t"))
    {
        window.open("https://twitter.com/hashtag/" + zoekopdracht.replaceAll(" ", "")); //haalt de spaties uit de tags
    }
    else if(!prefix.startsWith("/"))
    {
        window.alert("Invalid Command")
    }
    else
    {
        window.alert("Unknown Command Prefix")
    }
}
window.addEventListener("load", setup);