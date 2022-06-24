// import data from './data/lol/lol.js';
import harryPotterData from './data/harrypotter/data.js';

// función get names

export const getNames = (category) =>{
  let categoryArray=[];

  for (let i in harryPotterData){// voy a recorrer los indices del obj HP
    let keyHarryData = harryPotterData[i]; //array de propiedades de mi obj
    //console.log(keyHarryData);

    if(category==[i]){ //si mi array es = a 1 propiedad de mi obj que pase
     for(let j=0 ; j<keyHarryData.length ; j++){
        if (keyHarryData[j].hasOwnProperty("name")){ //estoy en el array de personajes
         categoryArray.push(keyHarryData[j].name);
        }
        else if (keyHarryData[j].hasOwnProperty("type")){
         categoryArray.push(keyHarryData[j].type);
        }
        else if (keyHarryData[j].hasOwnProperty("title")){
         categoryArray.push(keyHarryData[j].title)
        }
      }
    } 
  } 
  return categoryArray;
};

export const sortData = (data,sortOrder) =>{
 

}


