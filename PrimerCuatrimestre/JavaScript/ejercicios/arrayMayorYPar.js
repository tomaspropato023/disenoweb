var numeros = new Array(12);
numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var mayor = numeros[0];
for (var indice = 0; indice < 12; indice++) {
    if (numeros[indice] > mayor) {
        mayor = numeros[indice];
    }
}
var parImpar = function (mayor) {
    if (mayor % 2 == 0) {
        console.log("El numero ".concat(mayor, " es par."));
    }
    else {
        console.log("El numero ".concat(mayor, " es impar."));
    }
};
console.log("El numero mayor es ".concat(mayor));
parImpar(mayor);
