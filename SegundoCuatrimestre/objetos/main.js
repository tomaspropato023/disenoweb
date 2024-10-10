"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libro_1 = require("./libro");
var gestorLibros_1 = require("./gestorLibros");
var MartinFierro = new libro_1.Libro("Martin Fierro", "Jose Hernández", 1872);
var gestorLibro1 = new gestorLibros_1.gestorLibro("GestorOlavarria");
gestorLibro1.agregarLibro("Martin Fierro", "José Hernández", 1872);
console.log(gestorLibro1);
