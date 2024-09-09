import * as rls from 'readline-sync';

let arrayDeNumeros : number[] = new Array (5);
let nro : number, indice : number;
for (indice = 0; indice < 5; indice++) {
    nro = rls.questionInt(`Indique el numero que se desea guardar en la posicion ${indice}: `);
    arrayDeNumeros[indice] = nro
}

for (indice = 0; indice < 5; indice++) {
    console.log(`El numero en la posicion ${indice} es`, arrayDeNumeros[indice])
}