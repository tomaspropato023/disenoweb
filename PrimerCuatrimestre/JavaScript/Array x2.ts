import * as rls from 'readline-sync';

let arrayNombres : string[] = new Array (2);
let arrayNumeros : number[] = new Array (3);
let indice : number;

for (indice = 0; indice < 2; indice++){
    arrayNombres[indice] = rls.question(`Ingrese un nombre para la posicion ${indice}: `);
}
for (indice = 0; indice < 3; indice++){
    arrayNumeros[indice] = rls.questionInt(`Ingrese un numero para la posicion ${indice}: `);
}
for (indice = 0; indice < 2; indice++){
    console.log(`El nombre en la posicion ${indice} es: ${arrayNombres[indice]}`);
}
for (indice = 0; indice < 3; indice++){
    console.log(`El numero en la posicion ${indice} es: ${arrayNumeros[indice]}`);
}
