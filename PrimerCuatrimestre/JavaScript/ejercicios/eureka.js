"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var clave = "eureka";
var claveIngresada;
var contador = 2;
claveIngresada = readlineSync.question("Ingrese la clave: ");
while (contador <= 3 && claveIngresada != clave) {
    claveIngresada = readlineSync.question("Clave incorrecta. Vuelva a ingresar la clave: ");
    contador++;
}
if (claveIngresada != clave) {
    console.log("Ha agotado los intentos.");
}
else {
    console.log("Clave correcta.");
    console.clear();
}
