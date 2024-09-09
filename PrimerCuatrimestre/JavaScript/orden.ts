// funcion azar
function Azar(numAzar: number) : number {
    return Math.floor(Math.random() * numAzar);
}
// carga de array
function cargar(arreglo : number[], cantidad : number, numAzar : number) {
    for (let i : number = 0 ; i < cantidad; i++) {
        arreglo[i] = Azar(numAzar);
    }
}

// funcion escribir en una linea
function escribirEnUnaLinea(arreglo: number[], cantidad : number) {
    let vector : string = "";
    for (let i : number = 0; i < cantidad; i++){
        vector += `${arreglo[i]} `
    }
    console.log(vector);
}

// intercambio de posiciones
function intercambio(arreglo : number[], i : number, j : number) {
    let aux : number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

// comparacion
function comparar(arreglo : number[], i : number, j : number) : number {
    let comparacion : number;
    if (arreglo[i] === arreglo [j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1
    }
    return comparacion;
}

// burbuja
function burbuja(arreglo : number[], cantidad : number) {
    let i : number, j : number;
    for (i = 0; i < cantidad; i++) {
        for (j = 0; j < (cantidad - 1 - i); j++) {
            if (comparar(arreglo, j, j+1) === 1) {
                intercambio(arreglo, j, j+1)
            }
        }
    }
}

// orden
let limite : number = 10;
let array : number[] = new Array(limite);
cargar(array, limite, 100);
escribirEnUnaLinea(array, limite);
burbuja(array, limite);
escribirEnUnaLinea(array, limite);