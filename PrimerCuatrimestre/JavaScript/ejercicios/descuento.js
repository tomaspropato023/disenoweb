"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precio = readlineSync.questionInt("Ingrese el precio del producto: ");
var descuento;
descuento = precio * 0.1;
var precioTotal;
precioTotal = precio - descuento;
console.log("El total a pagar es de $", precioTotal);
