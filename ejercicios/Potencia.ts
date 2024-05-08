import * as readlineSync from 'readline-sync';

// definicion de variables
let base : number = readlineSync.questionInt("Ingrese un numero: ");
let exponente : number = readlineSync.questionInt("Ingrese el exponente: ");
let resultado : number;

// bucle while para reingresar un número en caso de que el número ingresado sea menor a 0
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
console.log("El resultado es:", resultado)