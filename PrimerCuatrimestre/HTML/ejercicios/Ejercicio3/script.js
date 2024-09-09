let boton1 = document.getElementById('boton1');
let boton2 = document.getElementById('boton2');
let parrafo1 = document.getElementById('parrafo1');
let parrafo2 = document.getElementById('parrafo2');

boton1.addEventListener("click", function(){
    parrafo1.style.visibility = 'hidden';
    boton1.style.visibility = 'hidden';
    parrafo2.style.visibility = 'visible';
    boton2.style.visibility = 'visible';
});

boton2.addEventListener("click", function(){
    parrafo2.style.visibility = 'hidden';
    boton2.style.visibility = 'hidden';
    parrafo1.style.visibility = 'visible';
    boton1.style.visibility = 'visible';
});