let map = new Map();
map.set('1', 'str1'); // un string como clave
map.set(1, 'num1'); // un número como clave
map.set(true, 'bool1'); // un booleano como clave
// ¿recuerda el objeto regular? convertiría las claves a string.
// Map mantiene el tipo de dato en las claves, por lo que estas dos son
// diferentes:
console.log(map)
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'
console.log(map.size); // 3

let john = { name: "John" };
// para cada usuario, almacenemos el recuento de visitas
let contadorVisitasMap = new Map();
// john es la clave para el Map
contadorVisitasMap.set(john, 123);
console.log(contadorVisitasMap.get(john)); // 123
console.log(contadorVisitasMap)

let recetaMap = new Map([
    ['pepino', 500],
    ['tomates', 350],
    ['cebollas', 50]
]);

for (let vegetales of recetaMap.keys()) {
    console.log(vegetales); // pepino, tomates, cebollas
}

for (let cantidad of recetaMap.values()) {
    console.log(cantidad); // 500, 350, 50
}

for (let entry of recetaMap) { // lo mismo que recipeMap.entries()
    console.log(entry); // pepino,500 (etc)
}

let setNombres = new Set();
let john2 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visitas, algunos usuarios lo hacen varias veces
setNombres.add(john2);
setNombres.add(pete);
setNombres.add(mary);
setNombres.add(john2);
setNombres.add(mary);
// set solo guarda valores únicos
console.log(setNombres.size); // 3
for (let usuario of setNombres) {
    console.log(usuario.name); // John (luego Pete y Mary)
}

let setFrutas = new Set(["naranjas", "manzanas", "uvas"]);
for (let valor of setFrutas) {
    console.log(valor); // "naranjas", "manzanas", "uvas"
}
// lo mismo que forEach:

setFrutas.forEach((valor, indice, setFrutas) => {
    console.log(valor, indice, setFrutas); // "naranjas", "manzanas", "uvas"
});