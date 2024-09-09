import * as readlineSync from 'readline-sync';

let base : number = readlineSync.questionInt("Ingrese un numero: ");
let exponente : number = readlineSync.questionInt("Ingrese el exponente: ");
let resultado : number;

while (exponente < 0) {
    console.log("Error. Ingrese un exponente mayor a cero.");
    exponente = readlineSync.questionInt();
}

let calculoPotencia = function (base : number, exponente : number) : number {
    if (exponente == 0) {
        return 1;
    } else {
        return (base ** exponente);
    }
}

resultado = calculoPotencia (base, exponente);
console.log(base,"elevado a la",exponente,"es igual a:",resultado)