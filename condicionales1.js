"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var primerNumero = readlineSync.questionInt("Ingrese un numero: ");
var segundoNumero = readlineSync.questionInt("Ingrese otro numero: ");
if (primerNumero > segundoNumero) {
    console.log(primerNumero, "es mayor que", segundoNumero);
}
else {
    console.log(segundoNumero, "es mayor que", primerNumero);
}
