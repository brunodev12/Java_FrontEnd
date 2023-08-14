const word = () => {
    var palabra = document.getElementById("palabra").value;
    return palabra.split("").reverse().join("");
}

function revertir(){
    palabra = word();

// Crear un nuevo elemento de párrafo (p)
    var nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = palabra;

// Obtener el elemento div por su ID
    var miDiv = document.getElementById('miDiv');

// Agregar el nuevo párrafo como hijo del div
    miDiv.appendChild(nuevoParrafo);
}

function eliminarElementosParrafo() {
    var miDiv = document.getElementById('miDiv');
    var parrafos = miDiv.getElementsByTagName('p');

    // Convertir HTMLCollection a un array para poder recorrerlo
    var parrafosArray = Array.from(parrafos);

    // Eliminar cada párrafo del array
    parrafosArray.forEach(function(parrafo) {
        parrafo.remove();
    });
}