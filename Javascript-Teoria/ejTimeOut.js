function saludar() {
    console.log("¡Hola! Han pasado 3 segundos.");
}

// Llamamos a la función 'saludar' después de 3000 milisegundos (3 segundos)
setTimeout(saludar, 3000);

// Llamamos a una función anónima después de 2000 milisegundos (2 segundos)
setTimeout(function() {
    console.log("Han pasado 2 segundos.");
}, 2000);
