//Interactuar con el DOM
import {computeStatsCharacterBook, computeStatsBook, computeStatsHouse, filterDataBook, filterDataHouse, getNames, sortData} from './data.js';
import harryPotterData from './data/harrypotter/data.js';

//Variables para jalar las categorías de la barra de navegación
let btnShowCharacters=document.getElementById("characters");
let btnShowPotions=document.getElementById("potions");
let btnShowSpells=document.getElementById("spells");
let btnShowBooks=document.getElementById("books");

//Variable para jalar la lista de datos de la data (divs creados)
let spaceToShowData=document.getElementById("containerDataHP");

//Variables para jalar la columna donde se podran los datos de cada categoría
let nameSpace=document.getElementById("detailName");
let speciesSpace=document.getElementById("detailSpecies");
let genderSpace=document.getElementById("detailGender");
let birthSpace=document.getElementById("detailBirth");
let ancestrySpace=document.getElementById("detailAncestry");
let houseSpace=document.getElementById("detailHouse");

//Variable para jalar la columna de detalles
// let detailColumn=document.querySelectorAll(".detailTable");

//Variables para mostrar las cajitas para filtrar
let boxAlphabet=document.getElementById("selectAlphabet");
let boxHouse=document.getElementById("boxSelectHouse");
let boxBook=document.getElementById("boxSelectBook");

//Variables para jalar la foto que va al costado de la cajita de detalles
let pictureCategory=document.getElementById("pictureCategory");

//IMPORTANTE Muestra la data con su respectiva categoría
const harryDataCharacters=harryPotterData.characters;
const harryDataSpells=harryPotterData.spells;
const harryDataPotions=harryPotterData.potions;
const harryDataBooks=harryPotterData.books;
const harryDataFunFacts=harryPotterData.funFacts;

//Variables para jalar las filas de la cajita de detalles
let genderRow=document.getElementById("genderRow");
let birthRow=document.getElementById("birthRow");
let ancestryRow=document.getElementById("ancestryRow");
let houseRow=document.getElementById("houseRow");

let titleSpecies2=document.getElementById("titleSpecies");


//Bonton de inicio - EXPLORE
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

    newDiv.appendChild(newDivText);//agregar el newDivText al newDiv
    //newDiv.setAttribute("id",i);
    spaceToShowData.appendChild(newDiv);//agregar el newDiv al DIV padre (containerDataHP)
  }
}

//Evento para mostar los detalles de cada dato
spaceToShowData.addEventListener("click", (event)=>{
  harryDataCharacters.forEach(character => { //¿?
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


//Función para pintar datos en la primera carga
function firstLoad(){
  const arrayCharacters=getNames("characters");
  
  spaceToShowData.innerHTML="";
  createDivs(arrayCharacters);

  harryDataCharacters.forEach(character => { //en la 1ra carga q muestre la data de HP
      if(character.name === "Harry Potter"){
        nameSpace.innerHTML=character.name;
        speciesSpace.innerHTML=character.species;
        genderSpace.innerHTML=character.gender;
        birthSpace.innerHTML=character.birth;
        ancestrySpace.innerHTML=character.ancestry;
        houseSpace.innerHTML=character.house;
      }
  })

  btnShowCharacters.classList.add("navCategory"); //no lo tenemos en el HTML, se agrego en el CSS directamente

  boxAlphabet.addEventListener("change", ()=>{  // Cambio el evento - cajita filtra A-Z
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

//La siguiente función limpia los campos de los detalles
function cleanDetails(){
  nameSpace.innerHTML="";
  speciesSpace.innerHTML="";
  genderSpace.innerHTML="";
  birthSpace.innerHTML="";
  ancestrySpace.innerHTML="";
  houseSpace.innerHTML="";
}

btnShowCharacters.addEventListener("click", ()=>{
  const arrayCharacters=getNames("characters");

  // detailColumn.innerHTML=""; //<-- esto no está funcionando
  cleanDetails();
  pictureCategory.setAttribute("src", "pictures/wizard-hat_1.png");

  //Aquí ponemos las categorías en color negrito cuando son seleccionadas
  btnShowCharacters.classList.add("navCategory");
  btnShowSpells.classList.remove("navCategory");
  btnShowPotions.classList.remove("navCategory");
  btnShowBooks.classList.remove("navCategory");

  //sección para volver visible a los elementos ocultos
  boxHouse.style.visibility="visible";
  boxBook.style.visibility="visible";
  genderRow.style.display="table-row";
  birthRow.style.display="table-row";
  ancestryRow.style.display="table-row";
  houseRow.style.display="table-row";
  titleSpecies2.innerHTML="Species :"; //como lo explico ¿?

  spaceToShowData.innerHTML="";
  createDivs(arrayCharacters);

  //Se ejecuta 
  boxAlphabet.addEventListener("change", ()=>{ //cajita filtra A-Z
    spaceToShowData.innerHTML="";
    createDivs(sortData(arrayCharacters, boxAlphabet.value));
  });
  
  boxHouse.addEventListener("change", ()=>{ //cajita filtra casas
    spaceToShowData.innerHTML="";

    let namesHouse=filterDataHouse(harryDataCharacters,boxHouse.value);
    createDivs(namesHouse);
  })

  boxBook.addEventListener("change", ()=>{ //cajita filtra libros
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
  titleSpecies2.innerHTML="Description :"; //lo vuelves a agregar
}

//comentario ¿? HECHIZOS
btnShowSpells.addEventListener("click", ()=>{
  let arraySpells=getNames("spells"); 

  // detailColumn.innerHTML="";
  cleanDetails();
  pictureCategory.setAttribute("src", "pictures/magic-wand_1.png");

  //Pone en negrita la categoría y indicada y limpia las otras
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


//comentario ¿? POCIONES
btnShowPotions.addEventListener("click", ()=>{
  let arrayPotions=getNames("potions");
  console.log(arrayPotions);

  // detailColumn.innerHTML="";
  cleanDetails();
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

//comentario ¿? BOOK
btnShowBooks.addEventListener("click", ()=>{
  let arrayBooks=getNames("books");

  // detailColumn.innerHTML="";
  cleanDetails();
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

//Variables para trabajar ComputeStatsHouse()
let statsGryff=document.getElementById("gryffNumber");
let statsSlyt=document.getElementById("slytNumber");
let statsRaven=document.getElementById("ravenNumber");
let statsHuffle=document.getElementById("huffleNumber");

//La sgt función llama a computeStats para mostrar los personajes por casa
function statsCharactersPerHouse(){
  statsGryff.innerHTML=computeStatsHouse(harryDataCharacters,"Gryffindor");
  statsSlyt.innerHTML=computeStatsHouse(harryDataCharacters,"Slytherin");
  statsRaven.innerHTML=computeStatsHouse(harryDataCharacters,"Ravenclaw");
  statsHuffle.innerHTML=computeStatsHouse(harryDataCharacters,"Hufflepuff");
}
statsCharactersPerHouse();

//Variables para trabajar computeStatsBook()
let statsBook1=document.getElementById("book1Number");
let statsBook2=document.getElementById("book2Number");
let statsBook3=document.getElementById("book3Number");
let statsBook4=document.getElementById("book4Number");
let statsBook5=document.getElementById("book5Number");
let statsBook6=document.getElementById("book6Number");
let statsBook7=document.getElementById("book7Number");

//La sgt función llama a computeStats para mostrar los personajes por libro
function statsCharactersPerBook(){
  statsBook1.innerHTML=computeStatsBook(harryDataCharacters,1);
  statsBook2.innerHTML=computeStatsBook(harryDataCharacters,2);
  statsBook3.innerHTML=computeStatsBook(harryDataCharacters,3);
  statsBook4.innerHTML=computeStatsBook(harryDataCharacters,4);
  statsBook5.innerHTML=computeStatsBook(harryDataCharacters,5);
  statsBook6.innerHTML=computeStatsBook(harryDataCharacters,6);
  statsBook7.innerHTML=computeStatsBook(harryDataCharacters,7);
}
statsCharactersPerBook();

//Variable para trabajar computeStatsAllCharacterInTheBook 
let statsAllCharacters=document.getElementById("allBooksNumber");

//La sgt fucnión llama a computeStatsCharacterBook
function statsCharactersInAllBooks(){
  statsAllCharacters.innerHTML=computeStatsCharacterBook(harryDataCharacters);
}
statsCharactersInAllBooks();

// Acá inicia el carrusel automático para computeStats

//Declaramos variables
const houseStatsCarousel=document.querySelector("#boxStats1");
const bookStatsCarousel=document.querySelector("#boxStats2");
let interval1;
let interval2;

//*función para mover el houseStats
const start=(elementoHTML)=>{

  let step1 = 2; //avanza en 2px
  return setInterval(() => {

    elementoHTML.scrollTop += step1;
    let maxScrollTop= elementoHTML.scrollHeight-elementoHTML.clientHeight;

    if(elementoHTML.scrollTop==maxScrollTop){
      step1=-2;
    } 
    
    else if(elementoHTML.scrollTop==0){
      step1=2;
    }

  },50)
  
}

interval1=start(houseStatsCarousel);
interval2=start(bookStatsCarousel);

//*función para detener el carrusel
const stop=(elIntervalo)=>{
  clearInterval(elIntervalo);
}
//****se detiene cuando pasas el mouse
houseStatsCarousel.addEventListener('mouseover',()=>{
  stop(interval1);
})
//****avanza cuando le quitas el mouse
houseStatsCarousel.addEventListener('mouseout',()=>{
  interval1=start(houseStatsCarousel);
})


bookStatsCarousel.addEventListener('mouseover',()=>{
  stop(interval2);
})

bookStatsCarousel.addEventListener('mouseout',()=>{
  interval2=start(bookStatsCarousel);
}) 






/* 

const start2=()=>{
  let step2=0.5;
  interval2=setInterval(() => {
    bookStatsCarousel.scrollTop+=step2;
    let maxScrollTop= bookStatsCarousel.scrollHeight-bookStatsCarousel.clientHeight;

    if(bookStatsCarousel.scrollTop==maxScrollTop){
      step2=-0.5;
    } else if(bookStatsCarousel.scrollTop==0){
      step2=0.5;
    }
  },10)
}
start2();

const stop2=()=>{
  clearInterval(interval2);
}

bookStatsCarousel.addEventListener('mouseover',()=>{
  stop2();
})

bookStatsCarousel.addEventListener('mouseout',()=>{
  start2();
})  */

//********************* 

//********************* 

//Variables para jalar las curiosidades <!-- Sección nueva 26.06.22-->
let type1=document.getElementById("typeFun1");
let type2=document.getElementById("typeFun2");
let type3=document.getElementById("typeFun3");
let type4=document.getElementById("typeFun4");
let type5=document.getElementById("typeFun5");
let type6=document.getElementById("typeFun6");
let type7=document.getElementById("typeFun7");
let type8=document.getElementById("typeFun8");

let content1=document.getElementById("contentFun1");
let content2=document.getElementById("contentFun2");
let content3=document.getElementById("contentFun3");
let content4=document.getElementById("contentFun4");
let content5=document.getElementById("contentFun5");
let content6=document.getElementById("contentFun6");
let content7=document.getElementById("contentFun7");
let content8=document.getElementById("contentFun8");

//Rellenando el contenido en FunFacts

function funFacts (){
 type1.innerHTML=harryDataFunFacts[0].type;
 type2.innerHTML=harryDataFunFacts[1].type;
 type3.innerHTML=harryDataFunFacts[2].type;
 type4.innerHTML=harryDataFunFacts[3].type;
 type5.innerHTML=harryDataFunFacts[4].type;
 type6.innerHTML=harryDataFunFacts[5].type;
 type7.innerHTML=harryDataFunFacts[6].type;
 type8.innerHTML=harryDataFunFacts[7].type;

 content1.innerHTML=harryDataFunFacts[0].content;
 content2.innerHTML=harryDataFunFacts[1].content;
 content3.innerHTML=harryDataFunFacts[2].content;
 content4.innerHTML=harryDataFunFacts[3].content;
 content5.innerHTML=harryDataFunFacts[4].content;
 content6.innerHTML=harryDataFunFacts[5].content;
 content7.innerHTML=harryDataFunFacts[6].content;
 content8.innerHTML=harryDataFunFacts[7].content;
}
funFacts();
//********************* 

//Acá inicia el Slider de Fun facts

let funFact=document.getElementsByClassName("funFact");
let slideIndex=1;
showDivs(slideIndex,funFact);

function plusDivs(n,data){
  showDivs(slideIndex+=n,data);
}

function showDivs(n, data){
  if(n>data.length){
    slideIndex=1;
  }
  if(n<1){
    slideIndex=data.length;
  }
  for(let i=0; i<data.length; i++){
    data[i].style.display="none";
  }
  data[slideIndex-1].style.display="block";
}

const buttonLeft=document.querySelector('#left');
const buttonRight=document.querySelector('#right'); 

buttonLeft.addEventListener("click", ()=>{
  plusDivs(-1,funFact);
})

buttonRight.addEventListener("click", ()=>{
  plusDivs(1,funFact);
})

//*******************







