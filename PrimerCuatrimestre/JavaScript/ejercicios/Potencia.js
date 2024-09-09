"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese un numero: ");
var exponente = readlineSync.questionInt("Ingrese el exponente: ");
var resultado;
while (exponente < 0) {
    console.log("Error. Ingrese un exponente mayor a cero.");
    exponente = readlineSync.questionInt();
}
var calculoPotencia = function (base, exponente) {
    if (exponente == 0) {
        return 1;
    }
    else {
        return (Math.pow(base, exponente));
    }
};
resultado = calculoPotencia(base, exponente);
console.log(base, "elevado a la", exponente, "es igual a:", resultado);
