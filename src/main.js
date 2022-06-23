//Interactuar con el DOM
import {filterDataBook, filterDataHouse, getNames, sortData} from './data.js';
import harryPotterData from './data/harrypotter/data.js';

//Variables para jalar las categorías en navegación
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

//Variable para jalar la columna de detalles
let detailColumn=document.querySelectorAll(".detailTable");

let boxAlphabet=document.getElementById("selectAlphabet");
let boxHouse=document.getElementById("boxSelectHouse");
let boxBook=document.getElementById("boxSelectBook");


let pictureCategory=document.getElementById("pictureCategory");

const harryDataCharacters=harryPotterData.characters;
const harryDataSpells=harryPotterData.spells;
const harryDataPotions=harryPotterData.potions;
const harryDataBooks=harryPotterData.books;

//Variables para jalar las filas
let genderRow=document.getElementById("genderRow");
let birthRow=document.getElementById("birthRow");
let ancestryRow=document.getElementById("ancestryRow");
let houseRow=document.getElementById("houseRow");

let titleSpecies2=document.getElementById("titleSpecies");

let btnExplore=document.querySelector(".exploreBtn");

btnExplore.addEventListener("click", () => {
  document.querySelector(".welcomePage").style.display="none";
  document.querySelector(".mainContent").style.display="inherit";
})

//Función para crear Divs automáticamente

function createDivs(arrayCategory){
  for(let i=0; i<arrayCategory.length; i++){
    let newDiv=document.createElement("div");
    let newDivText=document.createTextNode(arrayCategory[i]);

    newDiv.appendChild(newDivText);
    //newDiv.setAttribute("id",i);
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
      speciesSpace.innerHTML=book.description;
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

//Función para pintar datos en la primera carga
function firstLoad(){
  const arrayCharacters=getNames("characters");

  spaceToShowData.innerHTML="";
  createDivs(arrayCharacters);

  harryDataCharacters.forEach(character => {
      if(character.name === "Harry Potter"){
        nameSpace.innerHTML=character.name;
        speciesSpace.innerHTML=character.species;
        genderSpace.innerHTML=character.gender;
        birthSpace.innerHTML=character.birth;
        ancestrySpace.innerHTML=character.ancestry;
        houseSpace.innerHTML=character.house;
      }
  })

  btnShowCharacters.classList.add("navCategory");

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";
    createDivs(sortData(arrayCharacters, boxAlphabet.value));
  }); 

  boxHouse.addEventListener("change", ()=>{
    spaceToShowData.innerHTML="";

    let namesHouse=filterDataHouse(harryDataCharacters,boxHouse.value);
    createDivs(namesHouse);
  })

  boxBook.addEventListener("change", ()=>{
    spaceToShowData.innerHTML="";

    let namesBook=filterDataBook(harryDataCharacters,boxBook.value);
    createDivs(namesBook);
  })
}
firstLoad();




btnShowCharacters.addEventListener("click", ()=>{
  const arrayCharacters=getNames("characters");

  detailColumn.innerHTML=""; //<-- esto no está funcionando
  pictureCategory.setAttribute("src", "pictures/wizard-hat_1.png");

  //Aquí ponemos las categorías en color negrito cuando son seleccionadas
  btnShowCharacters.classList.add("navCategory");
  btnShowSpells.classList.remove("navCategory");
  btnShowPotions.classList.remove("navCategory");
  btnShowBooks.classList.remove("navCategory");

  boxHouse.style.visibility="visible";
  boxBook.style.visibility="visible";
  genderRow.style.display="table-row";
  birthRow.style.display="table-row";
  ancestryRow.style.display="table-row";
  houseRow.style.display="table-row";
  titleSpecies2.innerHTML="Species :";

  spaceToShowData.innerHTML="";
  createDivs(arrayCharacters);

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";
    createDivs(sortData(arrayCharacters, boxAlphabet.value));
  });
  
  boxHouse.addEventListener("change", ()=>{
    spaceToShowData.innerHTML="";

    let namesHouse=filterDataHouse(harryDataCharacters,boxHouse.value);
    createDivs(namesHouse);
  })

  boxBook.addEventListener("change", ()=>{
    spaceToShowData.innerHTML="";

    let namesBook=filterDataBook(harryDataCharacters,boxBook.value);
    createDivs(namesBook);
  })
  
});

//La sgt función oculta los elementos extra que solo son necesarios en Characters
function hideData(){
  boxHouse.style.visibility="hidden";
  boxBook.style.visibility="hidden";
  genderRow.style.display="none";
  birthRow.style.display="none";
  ancestryRow.style.display="none";
  houseRow.style.display="none";
  titleSpecies2.innerHTML="Description :";
}

btnShowSpells.addEventListener("click", ()=>{
  let arraySpells=getNames("spells");

  detailColumn.innerHTML="";
  pictureCategory.setAttribute("src", "pictures/magic-wand_1.png");

  btnShowSpells.classList.add("navCategory");
  btnShowCharacters.classList.remove("navCategory");
  btnShowPotions.classList.remove("navCategory");
  btnShowBooks.classList.remove("navCategory");

  hideData();

  spaceToShowData.innerHTML="";
  createDivs(arraySpells);

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";
    createDivs(sortData(arraySpells, boxAlphabet.value));
  }); 
});

btnShowPotions.addEventListener("click", ()=>{
  let arrayPotions=getNames("potions");

  detailColumn.innerHTML="";
  pictureCategory.setAttribute("src", "pictures/cauldron_1.png");

  btnShowPotions.classList.add("navCategory");
  btnShowCharacters.classList.remove("navCategory");
  btnShowSpells.classList.remove("navCategory");
  btnShowBooks.classList.remove("navCategory");

  hideData();

  spaceToShowData.innerHTML="";
  createDivs(arrayPotions);

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";
    createDivs(sortData(arrayPotions, boxAlphabet.value));
  }); 
});

btnShowBooks.addEventListener("click", ()=>{
  let arrayBooks=getNames("books");

  detailColumn.innerHTML="";
  pictureCategory.setAttribute("src", "pictures/open-book_1.png");

  btnShowBooks.classList.add("navCategory");
  btnShowCharacters.classList.remove("navCategory");
  btnShowPotions.classList.remove("navCategory");
  btnShowSpells.classList.remove("navCategory");

  hideData();

  spaceToShowData.innerHTML="";
  createDivs(arrayBooks);

  boxAlphabet.addEventListener("change", ()=>{ 
    spaceToShowData.innerHTML="";
    createDivs(sortData(arrayBooks, boxAlphabet.value));
  }); 
});




//console.log(example, data);
