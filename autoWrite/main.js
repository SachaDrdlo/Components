const txt = "Voici un texte comme si vous l'écriviez !   "

let index = 0;

const textWritter = () => {
    document.body.innerText = txt.slice(0, index);

    index++;

    if(index > txt.length - 1) {
        index = 0
    }
}

setInterval(textWritter, 100)