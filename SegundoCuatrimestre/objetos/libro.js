"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(_nombre, _autor, _anioEdicion) {
        this.nombre = _nombre;
        this.autor = _autor;
        this.anioEdicion = _anioEdicion;
    }
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getAnioEdicion = function () {
        return this.anioEdicion;
    };
    Libro.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.setAnioEdicion = function (anioEdicion) {
        this.anioEdicion = anioEdicion;
    };
    return Libro;
}());
exports.Libro = Libro;
