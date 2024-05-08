"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese un numero: ");
var numero2 = rls.questionInt("Ingrese otro numero: ");
var opcionMenu = rls.questionInt("Presione 1 para sumar los numeros o presione 2 para restarlos, presione cualquier otra tecla para salir: ");
function dibujarGuionesN(cantidad) {
    var i;
    var linea = "-";
    for (i = 0; i <= cantidad; i++) {
        linea = linea + "-";
    }
    ;
    console.log(linea);
}
function calcularResultado(numero1, numero2, opcionMenu) {
    var resultado = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
var resultadoFunc = 0;
resultadoFunc = calcularResultado(numero1, numero2, opcionMenu);
dibujarGuionesN(resultadoFunc);
console.log("El resultado es", resultadoFunc);
dibujarGuionesN(resultadoFunc);
