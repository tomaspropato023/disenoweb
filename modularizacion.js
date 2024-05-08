"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese un numero: ");
var numero2 = rls.questionInt("Ingrese otro numero: ");
var opcionMenu = rls.questionInt("Presione 1 para sumar los numeros o presione 2 para restarlos, presione cualquier otra tecla para salir: ");
function dibujarGuiones(cantidad) {
    var i;
    var linea = "-";
    for (i = 0; i <= cantidad; i++) {
        linea = linea + "-";
    }
    ;
    console.log(linea);
}
if (opcionMenu == 1) {
    dibujarGuiones(40);
    console.log("El resultado es:", (numero1 + numero2));
    dibujarGuiones(40);
}
else if (opcionMenu == 2) {
    dibujarGuiones(30);
    console.log("El resultado es:", (numero1 - numero2));
    dibujarGuiones(30);
}
