//importando de file system 
const fs = require('node:fs');
//importando el path
const path = require('node:path');

//existsSync() => comprueba si un archivo existe, devuelve un valo booleano
//Ver si existe la ruta
const existpath = (route)=>{
 return fs.existsSync(route)
}
console.log(existpath('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/test/md-links.spec.js'));
console.log(existpath('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/test/md-links.js'));

//path.isAbsolute => comprueba si la ruta es absoluta, devuelve un valo booleano
//Verificar si la ruta es absoluta
const pathIsAbs = (route)=>{
  return path.isAbsolute(route)
}
console.log("Aqui empieza la funcion para verificar si es una ruta absoluta")
console.log(pathIsAbs('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/test/md-links.spec.js'))
console.log(pathIsAbs('md-links.spec.js'))

//path.resolve => resuelve una ruta y la convierte en una ruta absoluta
//Convertir la ruta a absoluta
const convertAbs = (route) =>{
  return pathIsAbs(route) ? route : path.resolve(route);
}
console.log(convertAbs('cli.js'))

//fs.statSync.isFile => retorna informacion sobre si la ruta es de un archivo, retorna un valor booleno
// Verificar si es un archivo
const isFile = (route) => {
  return fs.statSync(route).isFile();
}
console.log('aquí se verifica si es un archivo')
console.log(isFile('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/direcPrueba/archiPrueba1.md'));
console.log(isFile('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/cli.js'));  
console.log(isFile('direcPrueba'));  

//path.extname => obtiene la porcion de extension de una ruta de archivo ,retorna un valor booleno
//Verifica si los archivos son tipo  .md
const tipeExtension = (route) => {
  return path.extname(route) === '.md';
}
console.log('verificar si es archivo md');
console.log(tipeExtension('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/direcPrueba/archiPrueba1.md'));

//fs.readFileSync => lee archivos y devuelve su contenido
//Leer el archivo md

const readFile = (file) => {
  if(tipeExtension(file)){
    console.log(file , 'que me traes'); 
    return fs.readFileSync(file, 'utf-8'); 
  } else {
    throw ('No se encontraron archivos con extensión .md')
  }
}
console.log(readFile('C:/Users/jhqm_/OneDrive/Documentos/GitHub/LIM018-md-links/direcPrueba/archiPrueba1.md', 'utf-8'));
 
//fs.readdirSyn => lee el contenido de un directorio 
// Leer un directorio
const readDirect = (dir) => {
  return fs.readdirSync(dir);
} 
console.log(readDirect('direcPrueba' , 'leer un directorio')); 

