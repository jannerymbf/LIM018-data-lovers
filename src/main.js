//Interactuar con el DOM
import {getNames, sortData} from './data.js';
import harryPotterData from './data/harrypotter/data.js';

let btnShowCharacters=document.getElementById("characters");
let btnShowPotions=document.getElementById("potions");
let btnShowSpells=document.getElementById("spells");
let btnShowBooks=document.getElementById("books");

let spaceToShowData=document.getElementById("containerDataHP");

let nameSpace=document.getElementById("detailName");
let speciesSpace=document.getElementById("detailSpecies");
let genderSpace=document.getElementById("detailGender");
let birthSpace=document.getElementById("detailBirth");
let ancestrySpace=document.getElementById("detailAncestry");
let houseSpace=document.getElementById("detailHouse");

let boxAlphabet=document.getElementById("selectAlphabet");
let boxHouse=document.getElementById("boxSelectHouse");
let boxBook=document.getElementById("boxSelectBook");

let spacePictureCategory=document.getElementById("containerPictureCategory");

const harryDataCharacters=harryPotterData.characters;
const harryDataSpells=harryPotterData.spells;
const harryDataPotions=harryPotterData.potions;
const harryDataBooks=harryPotterData.books;

//Variables para jalar las filas
 

//Función para crear Divs automáticamente

function createDivs(arrayCategory){
  for(let i=0; i<arrayCategory.length; i++){
    let newDiv=document.createElement("div");
    let newDivText=document.createTextNode(arrayCategory[i]);

    newDiv.appendChild(newDivText);
    newDiv.setAttribute("id",i);
    spaceToShowData.appendChild(newDiv);
  }
}

//Evento para mostar los detalles de cada dato

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
  harryDataSpells.forEach(spell => {
    if(spell.name === event.target.innerText){
      nameSpace.innerHTML=spell.name;
      speciesSpace.innerHTML=spell.description;
    }
  })
  harryDataPotions.forEach(potion => {
    if(potion.name === event.target.innerText){
      nameSpace.innerHTML=potion.name;
      speciesSpace.innerHTML=potion.description;
    }
  })
  harryDataBooks.forEach(book => {
    if(book.title === event.target.innerText){
      nameSpace.innerHTML=book.title;
      speciesSpace.innerHTML=book.author;
      genderSpace.innerHTML=book.description;
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
//Aqui termina funcion showDetails 

btnShowCharacters.addEventListener("click", ()=>{
  const arrayCharacters=getNames("characters");

  boxHouse.style.visibility="visible";
  boxBook.style.visibility="visible";

  spaceToShowData.innerHTML="";
  createDivs(arrayCharacters);

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";
    createDivs(sortData(arrayCharacters, boxAlphabet.value));
  }); 
});

btnShowSpells.addEventListener("click", ()=>{
  let arraySpells=getNames("spells");

  boxHouse.style.visibility="hidden";
  boxBook.style.visibility="hidden";


  //Insertar imagen --> no está cargando
  const imageWizard=document.createElement("img");
  imageWizard.src="src/pictures/cauldron_1.png";
  spacePictureCategory.appendChild(imageWizard);
  //hasta acá se inserta la imagen

  spaceToShowData.innerHTML="";
  createDivs(arraySpells);

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";
    createDivs(sortData(arraySpells, boxAlphabet.value));
  }); 
});

btnShowPotions.addEventListener("click", ()=>{
  let arrayPotions=getNames("potions");

  boxHouse.style.visibility="hidden";
  boxBook.style.visibility="hidden";

  spaceToShowData.innerHTML="";
  createDivs(arrayPotions);

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";
    createDivs(sortData(arrayPotions, boxAlphabet.value));
  }); 
});

btnShowBooks.addEventListener("click", ()=>{
  let arrayBooks=getNames("books");

  boxHouse.style.visibility="hidden";
  boxBook.style.visibility="hidden";

  spaceToShowData.innerHTML="";
  createDivs(arrayBooks);

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";
    createDivs(sortData(arrayBooks, boxAlphabet.value));
  }); 
});


//console.log(example, data);
