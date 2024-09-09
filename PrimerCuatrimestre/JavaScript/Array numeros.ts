let arregloNum : number[] = new Array (7);
arregloNum = [20, 14, 8, 0, 5, 19, 24];

function sorteo (arreglo : number[], n : number) {
    for (let i : number = arregloNum.length; i >= 0; i--) {
        let temp = 0;
        if (arreglo[i] > arreglo[i-1]) {
            temp = arreglo[i];
            arreglo[i] = arreglo[i-1];
            arreglo[i - 1] = temp;
        }
    }
    return arreglo
}
console.log(sorteo(arregloNum, arregloNum.length))

