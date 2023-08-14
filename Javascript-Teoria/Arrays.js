console.log("--------------EJEMPLO DELETE--------------")
let lista1 = ["voy", "a", "casa"];
console.log(lista1)
delete lista1[1]; // remueve "a"
console.log(lista1[1]); // undefined
// ahora arr = ["voy", , "casa"];
console.log("longitud: " + lista1.length); // 3
console.log(lista1)

console.log("--------------EJEMPLO SPLICE()--------------")
let lista2 = ["Yo", "estudio", "JavaScript"];
console.log(lista2)
lista2.splice(1, 1); // desde el índice 1, remover 1 elemento
console.log(lista2); // ["Yo", "JavaScript"]

console.log("Elimina y reemplaza")
let lista3 = ["Yo", "estudio", "JavaScript", "ahora", "mismo"];
console.log(lista3)
// remueve los primeros 3 elementos y los reemplaza con otros
lista3.splice(0, 3, "a", "bailar");
console.log(lista3) // ahora ["a", "bailar", "ahora", "mismo"]

console.log("--------------EJEMPLO SLICE--------------")
let lista4 = ["t", "e", "s", "t"];
console.log(lista4)
console.log(lista4.slice(1, 3)); // e,s (copia desde 1 hasta 3)

console.log("--------------EJEMPLO SPLIT--------------")
let nombres = 'Bilbo, Gandalf, Nazgul';
console.log(nombres)
let lista5 = nombres.split(', ');
console.log(lista5)
for (let name of lista5) {
    console.log(`Un mensaje para ${name}.`); // Un mensaje para Bilbo y los
    // otros nombres
}

console.log("--------------EJEMPLO REVERSE--------------")
let lista6 = [1, 2, 3, 4, 5];
console.log(lista6)
lista6.reverse();
console.log(lista6); // 5,4,3,2,1

console.log("--------------EJEMPLO SORT--------------")
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr = [1, 15, 2];
console.log(arr)
arr.sort(compareNumeric);
console.log(arr);
arr.push(20);

console.log(arr)

console.log("--------------EJEMPLO MAP--------------")

let lista7 = [2, 4, 6, 8, 10];
console.log(lista7)

let result = lista7.map(function (elemento, indice, array) {
    return elemento * 2;
});

console.log(result)

let longitudes = ["Bilbo", "Gandalf", "Nazgul"]
console.log(longitudes)
console.log("Obtengo la longitud de los elementos de la cadena anterior y los guardo en un nuevo array")

let longitudes2 = ["Bilbo", "Gandalf", "Nazgul"].map(function (elemento) {
    return elemento.length;
});
console.log(longitudes2); // 5,7,6

console.log("--------------EJEMPLO FLAT--------------")
var arr1 = [1, 2, [3, 4]];
console.log(arr1)
console.log("Flat()")
console.log(arr1.flat());
var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2);
console.log("Flat()")
console.log(arr2.flat());

console.log("--------------EJEMPLO FLATMAP--------------")

let array = [1, 2, [3, 4, [5, 6]]];
console.log(array)
var arrayNuevo = array.flatMap(function (elemento, indice, array) {
    // retorna elementos para el nuevo array
    return elemento;
});

console.log(arrayNuevo)

var arr1 = [1, 2, 3, 4];
console.log(arr1)

var arr2 = arr1.map(function (x) {
    x = x * 2;
});

console.log(arr2) // [[2], [4], [6], [8]]

var arr2 = arr1.flatMap(function (x) {
    return x = x * 2;
});

console.log(arr2) // [2, 4, 6, 8]

console.log("--------------METODOS EXTRAS--------------")
console.log("CONCAT")
let array1 = [1, 2, 3, 4, 5];
let array2 = [5, 2, 3, 1, 9];
console.log(array1);
console.log(array2);
var arraytotal = array1.concat(array2);

console.log(arraytotal);

console.log("JOIN")
var frutas = ["Kiwi", "Limon", "Otra"];
console.log(frutas)

var ej = frutas.join();
console.log(ej)

console.log("POP")
var frutas = ["Kiwi", "Limon", "Otra"];
console.log(frutas)
var a = frutas.pop();
console.log(a)
console.log(frutas)

console.log("PUSH")
var frutas = ["Kiwi", "Limon", "Otra"];
console.log(frutas)
var a = frutas.push("Uva");
console.log(a); //Muestra la nueva longitud del arreglo
console.log(frutas);

console.log("SHIFT")
var frutas = ["Kiwi", "Limon", "Otra"];
console.log(frutas)
var a = frutas.shift();
console.log(a);
console.log(frutas);

console.log("FIND")
const lista8 = [5, 12, 8, 130, 440];
console.log(lista8)
const encontrado = lista8.find((elemento, indice) => elemento > 10 + indice*5);
console.log(encontrado);

const numeros = [10, 20, 30, 40, 50];
console.log(numeros)

const encontrado2 = numeros.find((elemento, index) => {
    console.log(`Evaluando elemento en el índice ${index}: ${elemento}`);
    return elemento > 25;
});

console.log("Elemento encontrado:", encontrado2);

console.log("UNSHIFT")
var frutas = ["Banana", "Naranja","Manzana"];
console.log(frutas)
frutas.unshift("Limon","Anana");
console.log(frutas)