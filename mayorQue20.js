"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nroDeseado = rls.questionInt("Ingrese un numero: ");
if (nroDeseado > 20) {
    console.log("El numero ingresado es mayor a 20.");
}
else {
    console.log("El numero ingresado es menor o igual a 20.");
}
