/* eslint-disable no-prototype-builtins */
// estas funciones son de ejemplo
import harryPotterData from './data/harrypotter/data.js';

export const getNames = (category) => {
  let categoryArray=[];

  //la 'i' representa los keys de la data de HP
  for(let i in harryPotterData){
    let keyHarryData=harryPotterData[i]; //esto es un array

    if(category===i){
      for(let j=0; j<keyHarryData.length; j++){
        if(keyHarryData[j].hasOwnProperty("name")){
          categoryArray.push(keyHarryData[j].name);
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

export const sortData = (data, sortOrder) => {

  if(sortOrder=="AZ"){
    data.sort();
  }else{
    data.sort(function compare(a,b){
      if(b>a){
        return 1;
      }else if(a>b){
        return -1;
      }else if(a==b){
        return 0;
      }
    })
  }
  return data;
}

export const filterDataHouse = (data,condition) => {
  let arrayDataWithCondition;
  let namesHouseArray=[];
  
  arrayDataWithCondition=data.filter(obj => {
    return obj.house==condition;
  })
  arrayDataWithCondition.forEach(obj => {
    namesHouseArray.push(obj.name);
  })
  return namesHouseArray; //Nos arroja un array con los nombres de los personajes según la casa
}

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

export const computeStatsHouse = (data,house) => {
  let numberCharactersPerHouse=0;

  data.forEach(obj => {
    if (obj.house==house){
      numberCharactersPerHouse++;
    }
  })
  return numberCharactersPerHouse;
}

export const computeStatsBook = (data,book) => {
  let numberCharactersPerBook=0;

  data.forEach(obj => {
    obj.books_featured_in.forEach(number => {
      if(number==book){
        numberCharactersPerBook++
      }
    })   
  })
  return numberCharactersPerBook;
}

export const computeStatsCharacterBook = (data) => {
  let numberCharacterAllBook=0;
  
  data.forEach(obj => {
    if(obj.books_featured_in.includes(1) && obj.books_featured_in.includes(2) && obj.books_featured_in.includes(3)&& obj.books_featured_in.includes(4) && obj.books_featured_in.includes(5) && obj.books_featured_in.includes(6) && obj.books_featured_in.includes(7)){
      numberCharacterAllBook++;
    }
  })
  return numberCharacterAllBook;
}






/*export const showData = (container) => {

  //1. Con el primer for voy a recorrer las keys del objeto harryPotterData
  //2. 'j' representa un key de harryPotterData
  // Importante: for...in solo acepta la notación de corchetes de los objetos
  for(let j in harryPotterData){
    let keyObjectHarry=harryPotterData[j];

    // 1. Con el segundo for voy a recorrer del arreglo de cada key
    // 2. El 'i' representa la posición de un elemento del array de cada key
    for(let i=0; i<keyObjectHarry.length; i++){
      let newDiv = document.createElement("div");
      let newDivText = document.createTextNode(keyObjectHarry[i].name); //Idea: Para los elementos que no tienen name, puedo utilizar 'hasOwnProperty'
  
      newDiv.appendChild(newDivText);
      container.appendChild(newDiv);
    }
  }

  return 'showData';
};*/

//En vez de showData() --> getNames() 
//Que la función getNames() retorne un array

/*export const showDetails = (element) => {
  
};*/
