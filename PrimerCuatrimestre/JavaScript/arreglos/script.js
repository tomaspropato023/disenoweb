const arr = [1,2,3,4,5];

//console.log(arr);

arr.forEach(item => {
    console.log(item);
})

//every() = verifica que TODOS los elementos del arreglo cumplan con una condición X 
const everyCumple = arr.every(item => item>2 )
console.log(everyCumple);

const menos = arr.every(item => item<4)
console.log(menos);

//some() = nos dice si ALGUNO de los elementos cumple con la condición X;
const algunos = arr.some(item => item>0)

//reduce() 

const suma = arr.reduce((total, valor) => total + valor, 0);
console.log(suma);

//map()

const suma1=arr.map(item => item +1);
console.log(suma1);
console.log(arr);

//filter() = se ejecuta sobre cada elemento y crea un nuevo arreglo con los elementos que cumplan la condicion
const filtro = arr.filter(item => item > 2);
console.log(filtro);
