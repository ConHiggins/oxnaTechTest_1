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


if(searchbar.value.length==0){addPokes(pokemonArray)};
/////////////////////////////////////////////////////////////////  Extensions  /////////////////////////////////////////////////////////////////////////
const removePokes = (arr) => {

    if(arr.length > 0) {

            arr.forEach((poke) => {

                
                if(arr.includes(poke.name)) {
                    arr.splice(arr.indexOf(poke),1);
                    let types = poke.types.join(",").replace(/,/g, " & ").split();
                    main.innerHTML -= ` <div class="card">
                                            <img src="${poke.sprite}" class="card__image">
                                            <p class="card__content card__heading">${poke.name}</p>
                                            <p class="card__content card__text">${poke.name} (#${poke.id}) is a ${types} type Pokemon.</p>
                                        </div>`
                }
                if(searchArr.includes(poke)) {
                    searchArr.splice(searchArr.indexOf(poke),1);
                }
            })
    }

    arr = [];
    
}

const searchPoke = (searchString, arr) => {


    currSearch = String(searchString);
    let currSearchLength = currSearch.length;
    

    arr.forEach((poke) => {

        if(currSearch.includes(poke.name.substring(0,currSearchLength))) {

            searchArr.push(poke);
            currPokes = [...searchArr];
            
        }
        else { 

            searchArr.splice(searchArr.indexOf(poke),1);
        }
    });

    return addPokes(searchArr);
    

}

searchbar.addEventListener("input", () =>{

    if(searchbar.value.length >= 1)
    {
        searchPoke(searchbar.value, pokemonArray); 
        
    } 
    else {
        
        if(currPokes.length > 0) {
            removePokes(currPokes);
        }
        else return;
    }

});

//