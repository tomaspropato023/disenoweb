import * as rls from 'readline-sync';

let dimensionArray : number = rls.questionInt("Ingrese la dimension del arreglo: ");
let arregloNombres : string[] = new Array (dimensionArray);
let indice : number;
for (indice = 0; indice < dimensionArray; indice++) {
    arregloNombres[indice] = rls.question(`Indique el nombre que se desea guardar en la posicion ${indice}: `);
}

for (indice = 0; indice < dimensionArray; indice++) {
    console.log(`El nombre en la posicion ${indice} es`, arregloNombres[indice])
}