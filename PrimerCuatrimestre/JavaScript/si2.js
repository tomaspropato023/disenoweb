"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var suma, nota, promedio, contador;
contador = 1;
suma = 0;
while (contador <= 10) {
    nota = rls.questionInt("Ingrese su nota: ");
    suma = suma + nota;
    contador = contador + 1;
}
promedio = suma / 10;
console.log("El promedio es: ", promedio);
