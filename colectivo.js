"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var llegadaColectivo;
console.log("Esperando al colectivo");
llegadaColectivo = rls.question("Llegó el colectivo? (S/N): ");
while (llegadaColectivo == "N") {
    console.log("Esperando al colectivo");
    llegadaColectivo = rls.question("Llegó el colectivo? (S/N): ");
}
console.log("Llegó el colectivo.");
