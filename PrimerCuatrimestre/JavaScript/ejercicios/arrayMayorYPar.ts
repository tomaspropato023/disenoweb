let numeros : number[] = new Array(12);
numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let numeroMayor = numeros[0];

for (let indice = 0; indice < 12; indice++) {
    if (numeros[indice] > numeroMayor) {
        numeroMayor = numeros[indice];
    }
}

let parImpar = function(numeroMayor) {
    if (numeroMayor % 2 == 0){
        console.log(`El numero ${numeroMayor} es par.`);
    } else {
        console.log(`El numero ${numeroMayor} es impar.`);
    }
}

console.log(`El numero mayor es ${numeroMayor}`)
parImpar(numeroMayor);