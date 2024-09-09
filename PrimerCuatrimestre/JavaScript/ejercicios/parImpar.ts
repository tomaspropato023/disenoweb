import * as readlineSync from "readline-sync";
let numero : number = readlineSync.questionInt("Ingrese un numero: ");
if (numero == 0) {
    console.log("El numero es cero.");
} else {
    if (numero != 0 && numero % 2 == 0) {
        console.log("El numero es par.");
    } else {
        console.log("El numero es impar.");
    }
}