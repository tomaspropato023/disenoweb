"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var primerNumero = rls.questionInt("Ingrese un numero: ");
var segundoNumero = rls.questionInt("Ingrese un segundo numero: ");
var tercerNumero = rls.questionInt("Ingrese un ultimo numero: ");
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log(primerNumero, "es mayor que", segundoNumero, "y", tercerNumero);
}
if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
    console.log(segundoNumero, "es mayor que", primerNumero, "y", tercerNumero);
}
if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
    console.log(tercerNumero, "es mayor que", primerNumero, "y", segundoNumero);
}
