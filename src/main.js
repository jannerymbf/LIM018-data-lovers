import {mostrarDatos } from './data.js';

// import data from './data/rickandmorty/rickandmorty.js';

let botonMostrarPersonajes = document.getElementById("botonMostrarPersonajes");
let cajaDeDatos = document.getElementById("listaPersonajes");

botonMostrarPersonajes.addEventListener("click", () =>{
  mostrarDatos (cajaDeDatos);

});

import {mostrarHechizos } from './data.js';

// import data from './data/rickandmorty/rickandmorty.js';

let botonMostrarHechizos = document.getElementById("botonMostrarHechizos");
let cajaDeDatos2 = document.getElementById("listaPersonajes");

botonMostrarHechizos.addEventListener("click", () =>{
  mostrarHechizos (cajaDeDatos2);

});


//console.log(example, data);
