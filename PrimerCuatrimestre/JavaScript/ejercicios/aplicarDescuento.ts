import * as readlineSync from 'readline-sync';
let precioProducto : number = readlineSync.questionInt("Ingrese el precio del producto: ");
let descuento : number;
descuento = precioProducto * 0.1;
let precioTotal : number;
if (precioProducto > 1000) {
    precioTotal = precioProducto - descuento;
    console.log("Tiene un descuento. El total a pagar es de $",precioTotal);
} else {
    precioTotal = precioProducto
    console.log("El total a pagar es de $", precioTotal);
}