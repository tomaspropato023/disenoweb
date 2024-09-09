import * as rls from 'readline-sync';

function cargarVector(v: number[], cantidad: number) {
    for (let indice : number = 0; indice < cantidad; indice++) {
        v[indice] = rls.questionInt(`Ingrese el valor en ${indice}: `)
    }
}

let cantidad : number = rls.questionInt("Ingrese la longitud de los arreglos: ");

let arreglo1 : number[] = new Array(cantidad);
let arreglo2 : number[] = new Array(cantidad);

console.log("Ingrese los valores del primer vector:");
cargarVector(arreglo1, cantidad);
console.log("Ingrese los valores del segundo vector:");
cargarVector(arreglo2, cantidad);

function multiplicarVectores(v1: number[], v2: number[], cantidad: number): number {
    let acum : number = 0;
    for (let indice : number = 0; indice < cantidad; indice++) {
        acum = acum + (v1[indice] * v2[indice]);
    }
    return acum;
}

console.log(multiplicarVectores(arreglo1, arreglo2, cantidad));