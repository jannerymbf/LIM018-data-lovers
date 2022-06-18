//Interactuar con el DOM
import {getNames, sortData} from './data.js';
import harryPotterData from './data/harrypotter/data.js';
//import harryPotterData from './data/harrypotter/data.js';
//import {characters, funFacts, spells, potions} from 'src/data/harrypotter/data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let btnShowCharacters=document.getElementById("characters");
let btnShowPotions=document.getElementById("potions");
let btnShowSpells=document.getElementById("spells");
let btnShowBooks=document.getElementById("books");
let spaceToShowData=document.getElementById("containerDataHP");
let spaceToSHowDetails=document.getElementById("containerDetailsHP");

let nameSpace=document.getElementById("detailName");
let speciesSpace=document.getElementById("detailSpecies");
let genderSpace=document.getElementById("detailGender");
let birthSpace=document.getElementById("detailBirth");
let ancestrySpace=document.getElementById("detailAncestry");
let houseSpace=document.getElementById("detailHouse");

//Probar para limpiar
/*let botonMostrarHechizos = document.getElementById("botonMostrarHechizos");
botonMostrarHechizos.addEventListener("click",()=>{
   
cajaDeDatos.innerHTML= "";
})*/
let boxAlphabet=document.getElementById("selectAlphabet");

const harryDataCharacters=harryPotterData.characters;

//Crear divs automático

function createDivs(arrayCategory){
  for(let i=0; i<arrayCategory.length; i++){
    let newDiv=document.createElement("div");
    let newDivText=document.createTextNode(arrayCategory[i]);

    newDiv.appendChild(newDivText);
    newDiv.setAttribute("id",i);
    spaceToShowData.appendChild(newDiv);
  }
}

//probando función para mostar detalles

spaceToShowData.addEventListener("click", (event)=>{
  harryDataCharacters.forEach(character => {
    if(character.name === event.target.innerText){
      nameSpace.innerHTML=character.name;
      speciesSpace.innerHTML=character.species;
      genderSpace.innerHTML=character.gender;
      birthSpace.innerHTML=character.birth;
      ancestrySpace.innerHTML=character.ancestry;
      houseSpace.innerHTML=character.house;
    }
  })
})

/*function showDetails(array){
  for(let i=0; i<array.length; i++){
    array[i].addEventListener("click", ()=>{
      nameSpace.innerHTML=harryDataCharacters[i].name;
      speciesSpace.innerHTML=harryDataCharacters[i].species;
      genderSpace.innerHTML=harryDataCharacters[i].gender;
      birthSpace.innerHTML=harryDataCharacters[i].birth;
      ancestrySpace.innerHTML=harryDataCharacters[i].ancestry;
      houseSpace.innerHTML=harryDataCharacters[i].house;
    })
  }
}*/

//intentos para mostrar detalles
/*
function showDetails(array){
  array.forEach(function(element,index){
    element.addEventListener("click", function(event){
      for(let i=0; i<harryPotterData.characters; i++){
        if(event.currentTarget.textContent==harryPotterData.characters[i].name){
          nameSpace.innerHTML=harryDataCharacters[i].name;
        }
      }     
    })
  });       
}

function showDetails2(nodeList){
  nodeList.forEach(function(node){
    node.addEventListener("click", function(event){
      event.currentTarget.style.color="black";
           
    })
  });       
}*/

//aquí terminan los intentos para mostrar detalles

//Aqui termina funcion showDetails


btnShowCharacters.addEventListener("click", ()=>{

  let arrayCharacters=getNames("characters");

  spaceToShowData.innerHTML="";
  createDivs(arrayCharacters);
  //showDetails(spaceToShowData.children);

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";

    
    createDivs(sortData(arrayCharacters, boxAlphabet.value));
    //showDetails(sortData(spaceToShowData.children));   
  });

  
});




btnShowPotions.addEventListener("click", ()=>{
  spaceToShowData.innerHTML="";
  let arrayPotions=getNames("potions");

  for(let i=0; i<arrayPotions.length; i++){
    let newDiv=document.createElement("div");
    let newDivText=document.createTextNode(arrayPotions[i]);

    newDiv.appendChild(newDivText);
    spaceToShowData.appendChild(newDiv);
  }
});

btnShowSpells.addEventListener("click", ()=>{
  spaceToShowData.innerHTML="";
  let arraySpells=getNames("spells");

  for(let i=0; i<arraySpells.length; i++){
    let newDiv=document.createElement("div");
    let newDivText=document.createTextNode(arraySpells[i]);

    newDiv.appendChild(newDivText);
    spaceToShowData.appendChild(newDiv);
  }
});

btnShowBooks.addEventListener("click", ()=>{
  spaceToShowData.innerHTML="";
  let arrayBooks=getNames("books");

  for(let i=0; i<arrayBooks.length; i++){
    let newDiv=document.createElement("div");
    let newDivText=document.createTextNode(arrayBooks[i]);

    newDiv.appendChild(newDivText);
    spaceToShowData.appendChild(newDiv);
  }
});


//console.log(example, data);
