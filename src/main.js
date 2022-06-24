import harryPotterData from './data/harrypotter/data.js';
import {getNames} from './data.js';

let btnShowCharacters=document.getElementById("characters"); //los llamos por su id
let btnShowSpells=document.getElementById("spells");
let btnShowPotions=document.getElementById("potions");
let btnShowBooks=document.getElementById("books");
let spaceToShowData=document.getElementById("containerDataHarry");

btnShowCharacters.addEventListener("click", ()=> {
  spaceToShowData.innerHTML="";
  let arrayCharacters = getNames("characters");

  for (let i=0 ; i< arrayCharacters.length ; i++){
    let newDiv = document.createElement("div");
    let newDivText = document.createTextNode(arrayCharacters[i]);

    newDiv.appendChild(newDivText);
    spaceToShowData.appendChild(newDiv);
  }
});

btnShowSpells.addEventListener("click", ()=> {
  spaceToShowData.innerHTML="";
  let arrayCharacters = getNames("spells");

  for (let i=0 ; i< arrayCharacters.length ; i++){
    let newDiv = document.createElement("div");
    let newDivText = document.createTextNode(arrayCharacters[i]);

    newDiv.appendChild(newDivText);
    spaceToShowData.appendChild(newDiv);
  }
});

btnShowPotions.addEventListener("click", ()=> {
  spaceToShowData.innerHTML="";
  let arrayCharacters = getNames("potions");

  for (let i=0 ; i< arrayCharacters.length ; i++){
    let newDiv = document.createElement("div");
    let newDivText = document.createTextNode(arrayCharacters[i]);

    newDiv.appendChild(newDivText);
    spaceToShowData.appendChild(newDiv);
  }
});


btnShowBooks.addEventListener("click", ()=> {
  spaceToShowData.innerHTML="";
  let arrayCharacters = getNames("books");

  for (let i=0 ; i< arrayCharacters.length ; i++){
    let newDiv = document.createElement("div");
    let newDivText = document.createTextNode(arrayCharacters[i]);

    newDiv.appendChild(newDivText);
    spaceToShowData.appendChild(newDiv);
  }
});

spaceToShowData.addEventListener('click', (event)=> {
console.log(event.target.innerText);
//console.log(harryPotterData.characters);
harryPotterData.characters.forEach (character => {
  if(character.name === event.target.innerText){
    console.log(character);
  }

})
})
