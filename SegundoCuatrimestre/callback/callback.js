/* console.log("primero");
mostrarSegundo(mostrarCuarto);
console.log("tercero");

function mostrarSegundo(cb) {
    setTimeout(()=>{
        console.log("segundo");
        cb();
    }, 2500)
}

function mostrarCuarto() {
    console.log("cuarto");
}

*/

/*
function volar() {
    console.log("volar");
}

function planear(cbk) {
    setTimeout(() => {
        console.log("planear");
        cbk()
    }, 2000);
}

function volver() {
    console.log("volver")
}

function viajar() {
    volar();
    planear(function () {
        planear(function (){
            planear(function (){
                planear(volver)
            });
        });    
    });
}

viajar();

*/

//promesas
/* console.log("primero");

let promesa = new Promise((resolve, reject)=> {
    setTimeout(() => {
        if (true){
            console.log("segundo");
            resolve("Exito")
        } else {
            reject("404")
        }
    }, 1000);
})

promesa.then((res)=>{
    console.log(`tercero ${res}`);
}).catch((err)=>{
    console.log(`Error ${err}`);
}) */

//async await

/* function volar() {
    console.log("volar");
}

function planear() {
    setTimeout(() => {
        console.log("planear");
    }, 2000);
}

function volver() {
    console.log("volver")
}

async function viajar() {
    volar();
    await planear();
    await planear();
    await planear();
    await planear();
    volver();
}

viajar(); */

//try catch

try {
    alert("e")
}
catch {
    e
}
