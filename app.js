let datosAleatorios = [];
let contador = 0;
let contador2 = 0;
let y = 4;
let x = 4;
let i=0;
const card = document.getElementById("4");
const paint = document.getElementById("paint");

paint.addEventListener("click",function(){
    card.style.background="Memorama/2.jpg";
})

for (let i = 0; i < x; i++) {
    datosAleatorios[i] = [];
    for (let a = 0; a < y; a++) {
        datosAleatorios[i][a] = contador;
        contador2++;
        if (contador2 % 2 == 0) {
            contador++;
        }
    }
}

console.table(datosAleatorios);

let arrayUnidimensional = datosAleatorios.flat();

function mezclarArray(array) {
    let i = array.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1)); 
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
}

mezclarArray(arrayUnidimensional);

for (let i = 0; i < x; i++) {
    for (let a = 0; a < y; a++) {
        datosAleatorios[i][a] = arrayUnidimensional[i * y + a];
    }
}

console.table(datosAleatorios);
