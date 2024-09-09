import * as rls from 'readline-sync'

let arrayMes : string[] = new Array (13);

arrayMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let numeroMes : number = rls.questionInt("Ingrese el numero del mes a buscar: ");
let indice : number = numeroMes - 1;

console.log("El mes es", arrayMes[indice]);
