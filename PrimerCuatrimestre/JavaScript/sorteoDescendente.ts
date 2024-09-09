import * as rls from 'readline-sync';

let dimensionArreglo : number = rls.questionInt("Ingrese la dimension del arreglo: ");
let arregloAOrdenar : number[] = new Array(dimensionArreglo);

for (let i : number = 0; i < dimensionArreglo; i++) {
    arregloAOrdenar[i] = rls.questionInt(`Ingrese un numero para la posicion ${i}: `);
}

function ordenamientoDescendente (arreglo : number[], dimension: number) : number[] {
    let aux = 0;
    for (let i : number = dimension; i >= 0; i--) {
        for (let j = dimension; j > 0; j--) {
            if (arreglo[j] > arreglo[j - 1]) {
                aux = arreglo[j];
                arreglo[j] = arreglo[j - 1];
                arreglo[j - 1] = aux;
            } 
        }
    }
    return arreglo;
}

console.log(ordenamientoDescendente(arregloAOrdenar, dimensionArreglo))