// FOR EACH
console.log("--------------FOR EACH--------------")
console.log("Funcion declarada externamente")
function mostrarElementosArray(elemento, indice, array) {
    console.log("a[" + indice + "] = " + elemento + " el vector es: " + array);
}

[2, 5, , 9].forEach(mostrarElementosArray);


console.log("Funcion declarada internamente")
let array = [2, 5, 9]

array.forEach(function mostrarElementosArray(elemento, indice, array) {
    console.log("a[" + indice + "] = " + elemento + " el vector es: " + array);
});

// FOR OF
console.log("--------------FOR OF--------------")
let frutas = ["Manzana", "Naranja", "Uva"];
for (let fruta of frutas) {
    console.log(fruta);
}



class empleado {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

var empleados = [];
var empleado1 = new empleado("Juan", "Perez");
var empleado2 = new empleado("Roberto", "Carlos");
var empleado3 = new empleado("Mike", "Tower");

empleados.push(empleado1);
empleados.push(empleado2);
empleados.push(empleado3);

for (let empleado of empleados) {
    console.log(empleado.nombre + " " + empleado.apellido);
}

//FOR IN
console.log("--------------FOR IN--------------")
for (let empleado of empleados) {
    console.log(empleado);
    for (let dato in empleado) {
        console.log("DATO: " + dato);
        console.log(empleado[dato]);
    }
}