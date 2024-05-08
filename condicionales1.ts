import * as readlineSync from 'readline-sync';
let primerNumero : number = readlineSync.questionInt("Ingrese un numero: ");
let segundoNumero : number = readlineSync.questionInt("Ingrese otro numero: ");
if (primerNumero > segundoNumero) {
    console.log(primerNumero,"es mayor que",segundoNumero);
}    else {
    console.log(segundoNumero,"es mayor que",primerNumero);
}