import * as readlineSync from 'readline-sync';
let precio : number = readlineSync.questionInt("Ingrese el precio del producto: ");
let descuento : number;
descuento = precio * 0.1;
let precioTotal : number;
precioTotal = precio - descuento
console.log("El total a pagar es de $",precioTotal);