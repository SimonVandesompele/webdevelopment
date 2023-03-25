const setup = () => {
    let items = document.querySelectorAll('li');

    for (let i = 0; i < items.length; i++)
    {
        items[i].className = "lijstitem";
    }

    let picture = document.createElement("img");
    picture.setAttribute("src", "Images/poesj.PNG")
    document.body.appendChild(picture);
}
window.addEventListener("load", setup);