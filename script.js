const main = document.querySelector(".card-container")



import {pokemonArray} from "../data/pokemon.js";


const capitaliseWord = (word) => {

    return word.substring(0,1).toUpperCase() + word.slice(1);
}

const addPokes = (arr) => {


    arr.forEach((poke) => {

        let types = poke.types.join(",").replace(/,/g, " & ").split();
        poke.name = capitaliseWord(poke.name);

        main.innerHTML += ` <div class="card">
                                <img src="${poke.sprite}" class="card__image">"
                                <p class="card__heading">${poke.name}</p>
                                <p class="card__text">${poke.name} (#${poke.id}) is a ${types} type Pokemon.</p>
                            </div>`
    })

}


addPokes(pokemonArray)