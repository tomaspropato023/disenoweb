import * as rls from 'readline-sync';
let palabra : string = rls.question("Ingrese la palabra a invertir: ");
let cantidadLetras : number = palabra.length;
let arregloLetras : string[] = palabra.split("");

function mostrarVector(v: string[], cantidad: number) {
    for (let indice = 0; indice < cantidad; indice++) {
        console.log(v[indice] + " ");
    }
}

function mostrarVectorInvertido(v: string[], cantidad: number) {
    for (let indice = cantidad - 1; indice >= 0; indice--) {
        console.log(v[indice] + " ");
    }
}

function invertirVector(v: string[], cantidad: number) {
    let indiceIzq : number = 0;
    let indiceDer : number = cantidad - 1;
    let aux: string;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer++;
    }
}

console.log("Mostrando invertido...");
mostrarVectorInvertido(arregloLetras, cantidadLetras)

console.log("Mostrando vector...");
mostrarVector(arregloLetras, cantidadLetras)
