
// import data from './data/lol/lol.js';
import harryPotterData from './data/harrypotter/data.js';

// función mostrar datos

export const mostrarDatos = (container) => {

  for (let i=0 ; i < harryPotterData.characters.length ; i++) {
  let crearDiv = document.createElement("div"); //crear un <div></div>
  let textCrearDiv = document.createTextNode(harryPotterData.characters[i].name); //textoque va dentro del div
   //console.log(crearDiv);
   //console.log(textCrearDiv);
  //debugger;
  crearDiv.appendChild(textCrearDiv); //colocar el texto al contenedor: div vacio
  container.appendChild(crearDiv); // insertar el hijo al contenedor padre(container)
 
  }

  return mostrarDatos;

};


export const mostrarHechizos = (container) => {

  for (let i=0 ; i < harryPotterData.spells.length ; i++) {
    let crearDiv = document.createElement("div"); //crear un <div></div>
    let textCrearDiv = document.createTextNode(harryPotterData.spells[i].name); //textoque va dentro del div
     //console.log(crearDiv);
     //console.log(textCrearDiv);
    //debugger;
    crearDiv.appendChild(textCrearDiv); //colocar el texto al contenedor: div vacio
    container.appendChild(crearDiv); // insertar el hijo al contenedor padre(container)
   
    }
  
    return mostrarHechizos;

};



