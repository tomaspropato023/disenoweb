"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestorLibro = void 0;
var libro_1 = require("./libro");
var gestorLibro = /** @class */ (function () {
    function gestorLibro(nombre) {
        this.nombre = nombre;
        this.listaLibros = [];
    }
    gestorLibro.prototype.getNombre = function () {
        return this.nombre;
    };
    gestorLibro.prototype.getListaLibros = function () {
        var copiaLibros = this.listaLibros.map(function (lib) { return (__assign({}, lib)); });
        return this.listaLibros;
    };
    gestorLibro.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    gestorLibro.prototype.setListaLibros = function (listaLibros) {
        this.listaLibros = listaLibros;
    };
    gestorLibro.prototype.eliminarLibro = function (libroAEliminar) {
        if (libroAEliminar != undefined && this.listaLibros.includes(libroAEliminar) && libroAEliminar.getNombre().length) {
            var posicion = this.listaLibros.indexOf(libroAEliminar);
            this.listaLibros.slice(posicion, 1);
        }
    };
    gestorLibro.prototype.agregarLibro = function (nombre, autor, anio) {
        var nuevoLibro = new libro_1.Libro(nombre, autor, anio);
        if (!this.listaLibros.some(function (lib) { return lib.getNombre() == nombre && lib.getAutor() == autor && lib.getAnioEdicion() == anio; })) {
            this.listaLibros.push(nuevoLibro);
        }
        ;
    };
    return gestorLibro;
}());
exports.gestorLibro = gestorLibro;
