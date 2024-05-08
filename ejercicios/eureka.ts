import * as readlineSync from 'readline-sync';

const clave : string = "eureka";
let claveIngresada : string;
let contador : number = 2;


claveIngresada = readlineSync.question("Ingrese la clave: ");
while (contador <= 3 && claveIngresada != clave) {
    claveIngresada = readlineSync.question("Clave incorrecta. Vuelva a ingresar la clave: ");
    contador++;
}
if (claveIngresada != clave) {
    console.log("Ha agotado los intentos.");
} else {
    console.log("Clave correcta.");
    console.clear()
}