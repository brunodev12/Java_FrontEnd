// Crear un nuevo elemento de párrafo (p)
var nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo agregado usando .appendChild()';

// Obtener el elemento div por su ID
var miDiv = document.getElementById('miDiv');

// Agregar el nuevo párrafo como hijo del div
miDiv.appendChild(nuevoParrafo);
