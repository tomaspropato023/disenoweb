import * as readlineSync from 'readline-sync';
let usuario : string = "Juan";
let clave : string = "claveJuan";
let usuarioIngr : string = readlineSync.question("Ingrese su usuario: ");
let claveIngr : string = readlineSync.question("Ingrese su clave: ");
if (usuarioIngr == usuario && claveIngr == clave) {
    console.log("Bienvenido al sistema.");
}
