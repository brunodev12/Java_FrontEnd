const readlineSync = require('readline-sync');

function compare(a, b) {
    if (a > b) return 1; // si el primer valor es mayor que el segundo
    if (a == b) return 0; // si ambos valores son iguales
    if (a < b) return -1; // si el primer valor es menor que el segundo
    }


const a = parseFloat(readlineSync.question("Ingrese un número: "));
const b = parseFloat(readlineSync.question("Ingrese otro número: "));

console.log(compare(a,b))