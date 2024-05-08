import * as readlineSync from 'readline-sync';
let alturaPersona : number = readlineSync.questionInt("Ingrese su altura: ");
if (alturaPersona > 130) {
    console.log("Puede subir a la montaña rusa.");
} else {
    console.log("No puede subir a la montaña rusa.");
}