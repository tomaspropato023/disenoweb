"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var alturaPersona = readlineSync.questionInt("Ingrese su altura: ");
if (alturaPersona > 130) {
    console.log("Puede subir a la montaña rusa.");
}
else {
    console.log("No puede subir a la montaña rusa.");
}
