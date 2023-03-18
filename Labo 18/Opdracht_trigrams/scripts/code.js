const setup = () => {
    let trigram = "onoorbaar";

    for (let i = 0; i < trigram.length-2; i++)
  {
      console.log(trigram.slice(i, i+3));
  }

}
window.addEventListener("load", setup);