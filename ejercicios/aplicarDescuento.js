"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("Ingrese el precio del producto: ");
var descuento;
descuento = precioProducto * 0.1;
var precioTotal;
if (precioProducto > 1000) {
    precioTotal = precioProducto - descuento;
    console.log("Tiene un descuento. El total a pagar es de $", precioTotal);
}
else {
    precioTotal = precioProducto;
    console.log("El total a pagar es de $", precioTotal);
}
