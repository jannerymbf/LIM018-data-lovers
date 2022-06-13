// estas funciones son de ejemplo
import harryPotterData from './data/harrypotter/data.js';

export const showData = (container) => {

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
};

export const anotherExample = () => {
  return 'OMG';
};
