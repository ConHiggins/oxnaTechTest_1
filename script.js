const main = document.querySelector(".card-container")
import {pokemonArray} from "./data/pokemon.js";
const searchbar = document.querySelector(".search")
let currSearch;
let currPokes = [];
let searchArr = [];

const capitaliseWord = (word) => {

    return word.substring(0,1).toUpperCase() + word.slice(1);
}

const addPokes = (arr) => {
    console.log("adding pokes");
    arr.forEach((poke) => {

        let types = poke.types.join(",").replace(/,/g, " & ").split();
        poke.name = capitaliseWord(poke.name);

        if(!currPokes.includes(poke.name)) {
            currPokes.push(poke.name);
            main.innerHTML += ` <div class="card">
                                    <img src="${poke.sprite}" class="card__image">
                                    <p class="card__content card__heading">${poke.name}</p>
                                    <p class="card__content card__text">${poke.name} (#${poke.id}) is a ${types} type Pokemon.</p>
                                </div>`
        }
    })

}

    

/////////////////////////////////////////////////////////////////  Extensions  /////////////////////////////////////////////////////////////////////////

const searchFilter = (poke) => {
 
    
    currSearch = String(searchbar.value);
    let currSearchLength = currSearch.length;
    
    if(currSearch.charAt(0) != currSearch.charAt(0).toUpperCase()) {
        
        currSearch = currSearch.charAt(0).toUpperCase() + currSearch.slice(1);
    
    };
    return((currSearch == (poke.name.substring(0,currSearchLength))));

}

searchbar.addEventListener("keyup", () =>{

    currPokes = [];
    main.innerHTML = "";
     
    searchArr = pokemonArray.filter(searchFilter);
    console.log("searching");
    addPokes(searchArr);
    console.log("currPokes:" + currPokes);
    console.log("searchArr:" + searchArr);
})
