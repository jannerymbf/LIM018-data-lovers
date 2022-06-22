// Importar la data desde el archivo
import harryPotterData from './data/harrypotter/data.js';
console.log(harryPotterData);

//Primera función: obtener nombres
export const getNames = (category) => {
  let categoryArray=[];

  //la 'i' representa los keys (propiedades) de la data de HP
  for(let i in harryPotterData){ //voy a recorrer los indices del obj HP
    let keyHarryData=harryPotterData[i]; //esto es un array de las propiedades de mi obj

    if(category==i){
      for(let j=0; j<keyHarryData.length; j++){
        if(keyHarryData[j].hasOwnProperty("name")){ //estoy en el array de los personajes
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

//Segunda función: filtar en orden alfabetico
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
