/* eslint-disable no-prototype-builtins */
// estas funciones son de ejemplo
import harryPotterData from './data/harrypotter/data.js';

//Función getNames
export const getNames = (category) => {
  let categoryArray=[];

  //la 'i' representara los keys (propiedades) de la data de HP - 4categorias
  for(let i in harryPotterData){ //voy a recorrer las categorías del obj HP
    let keyHarryData=harryPotterData[i]; //esto es un array de las propiedades (categorías) de mi obj
   /*console.log(keyHarryData);*/
   /*console.log(harryPotterData);*/
    
    if(category===i){ //le digo a mi categoría que sí es = a 1 índice de mi obj pase
      for(let j=0; j<keyHarryData.length; j++){
        if(keyHarryData[j].hasOwnProperty("name")){//estoy en el array de los personajes
          categoryArray.push(keyHarryData[j].name); //al array se le agregue ese valor
        }else if(keyHarryData[j].hasOwnProperty("type")){
          categoryArray.push(keyHarryData[j].type);
        }else if(keyHarryData[j].hasOwnProperty("title")){
          categoryArray.push(keyHarryData[j].title);
        }
      }
    }
  }
  return categoryArray;

};

//Función sortData
export const sortData = (data,sortOrder) => {

  if(sortOrder=="AZ"){
    data.sort();
  }else{
    data.sort(function compare(a,b){
      if(b>a){
        return 1; //b se va a situar en un indice menor a A
      }else if(a>b){ 
        return -1; //a se va a situar en 1 indice menor a B
      }else if (a==b){ 
        return 0; 
      }
    })
  }
  return data;
}

//Función filterDataHouse
export const filterDataHouse = (data,condition) => {
  let arrayDataWithCondition;
  let namesHouseArray=[];
  
  arrayDataWithCondition=data.filter(obj => { //igualando 1 variable con 1 fx
    return obj.house==condition; //con el (.) accedes a las propiedades de 1 obj
  })
  arrayDataWithCondition.forEach(obj => {
    namesHouseArray.push(obj.name);
  })
  return namesHouseArray; //Nos arroja un array con los nombres de los personajes según la casa
}

//Función filterDataBook
export const filterDataBook = (data,condition) => {
  let arrayDataWithCondition=[];

  data.forEach(obj => {
    obj.books_featured_in.forEach(number => {
      if(number==condition){
        arrayDataWithCondition.push(obj.name);
      }
    })   
  })
  return arrayDataWithCondition;
}

//Función computeStatsHouse
export const computeStatsHouse = (data,house) => {
  let numberCharactersPerHouse=0;

  data.forEach(obj => {
    if (obj.house==house){
      numberCharactersPerHouse++;
    }
  })
  return numberCharactersPerHouse;
}

//Función computeStatsBook
export const computeStatsBook = (data,book) => {
  let numberCharactersPerBook=0;

  data.forEach(obj => {
    obj.books_featured_in.forEach(number => {
      if(number==book){
        numberCharactersPerBook++;
      }
    })   
  })
  return numberCharactersPerBook;
}

//Función computeStatsCharacterBook
export const computeStatsCharacterBook = (data) => {
  let numberCharacterAllBook=0;
  
  data.forEach(obj => {
    if(obj.books_featured_in.includes(1) && obj.books_featured_in.includes(2) && obj.books_featured_in.includes(3)&& obj.books_featured_in.includes(4) && obj.books_featured_in.includes(5) && obj.books_featured_in.includes(6) && obj.books_featured_in.includes(7)){
      numberCharacterAllBook++;
    }
  })
  return numberCharacterAllBook;
}

