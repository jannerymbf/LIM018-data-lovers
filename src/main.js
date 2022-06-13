//Interactuar con el DOM
import {showData} from './data.js';
//import harryPotterData from './data/harrypotter/data.js';
//import {characters, funFacts, spells, potions} from 'src/data/harrypotter/data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let btnShowCharacters=document.getElementById("characters");
let spaceToShowData=document.getElementById("containerDataHarry");

btnShowCharacters.addEventListener("click", ()=>{
    showData(spaceToShowData);
})

//console.log(example, data);
