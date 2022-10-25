//importando de file system 
const fs = require('node:fs');
//importando el path
const path = require('node:path');

//Funcion para ver si existe mi ruta
const existpath = (route)=>{
 return fs.existsSync(route)
}
console.log(existpath('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/test/md-links.spec.js'));
console.log(existpath('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/test/md-links.js'));

//Funcion para verificar si la ruta es absoluta
const pathIsAbs = (route)=>{
  return path.isAbsolute(route)
}
console.log("Aqui empieza la funcion para verificar si es una ruta absoluta")
console.log(pathIsAbs('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/test/md-links.spec.js'))
console.log(pathIsAbs('md-links.spec.js'))
