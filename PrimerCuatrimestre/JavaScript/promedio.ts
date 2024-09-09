import * as rls from 'readline-sync';

let dimensionArreglo : number = rls.questionInt("Ingrese la cantidad de jugadores: ");
let edadJugadores : number[] = new Array (dimensionArreglo);

function Azar(menorValor : number, mayorValor : number) : number {
    let numeroARetornar : number;
    numeroARetornar = Math.floor(Math.random() * (menorValor - mayorValor + 1) + mayorValor);
    return numeroARetornar;
}

function cargarEdadJugadores(edadJugadores: number[]) {
    for (let i = 0; i < edadJugadores.length; i++) {
        edadJugadores[i] = Azar(3,7)
    }
}

function mostrarEdadJugadores(edadJugadores: number[]) {
    let jugadores : string = "";
    for (let i = 0; i < edadJugadores.length; i++) {
        jugadores += edadJugadores[i]+" - ";
    }
    console.log(`Los jugadores son ${jugadores}`);
}

function obtenerPromedioEdades(edadJugadores : number[], dimensionArreglo : number) : number {
    let suma = 0;
    let promedio = 0;
    for (let i = 0; i < dimensionArreglo; i++) {
        suma += edadJugadores[i];
    }
    promedio = suma / dimensionArreglo;
    return promedio;
}

cargarEdadJugadores(edadJugadores);
mostrarEdadJugadores(edadJugadores);
console.log("El promedio de edades es: ", obtenerPromedioEdades(edadJugadores, dimensionArreglo));