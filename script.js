const main = document.querySelector(".card-container")
import {pokemonArray} from "./data/pokemon.js";
const searchbar = document.querySelector(".search")
let currSearch;
let currPokes = [];

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


// const removePokes = (arr) => {

//     if(arr.length > 0) {

//             arr.forEach((poke) => {

//                 let types = poke.types.join(",").replace(/,/g, " & ").split();
//                 if(arr.includes(poke.name)) {
                    
//                     arr[arr.length-1] = "";
//                     console.log(currPokes);
//                     main.innerHTML -= ` <div class="card">
//                                             <img src="${poke.sprite}" class="card__image">
//                                             <p class="card__content card__heading">${poke.name}</p>
//                                             <p class="card__content card__text">${poke.name} (#${poke.id}) is a ${types} type Pokemon.</p>
//                                         </div>`
//                 }
//             })
//     }
// }

// const searchPoke = (searchString, arr) => {


//     currSearch = String(searchString);
//     let currSearchLength = currSearch.length;
//     let searchArr = [];

//     console.log("current search:" + currSearch);

//     arr.forEach((poke) => {

//         if(currSearch.includes(poke.name.substring(0,currSearchLength))) {

//             searchArr.push(poke);
//             currPokes = [...searchArr];
//             console.log(currPokes);
//         }
//     });

//     console.log("searchArr:" + searchArr);
//     return addPokes(searchArr);
    

// }

// searchbar.addEventListener("input", () =>{

//     console.log(searchbar.value.length);

//     if(searchbar.value.length != 0)
//     {
//         searchPoke(searchbar.value, pokemonArray); 
        
//     } 
//     if(searchbar.value.length == 0 && currPokes.length >= 1) {
//         console.log("running here");
//         removePokes(currPokes);
//     }

// });

if(!currSearch){addPokes(pokemonArray)};