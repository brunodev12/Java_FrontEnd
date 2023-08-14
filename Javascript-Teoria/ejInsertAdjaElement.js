// Crear un nuevo elemento de párrafo (p)
var nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo insertado usando .insertAdjacentElement()';

// Obtener el elemento div por su ID
var miDiv = document.getElementById('miDiv');

// Insertar el nuevo párrafo antes del div
miDiv.insertAdjacentElement('beforebegin', nuevoParrafo);

// Insertar otro nuevo párrafo dentro del div al principio
var otroParrafo = document.createElement('p');
otroParrafo.textContent = 'Este es otro párrafo insertado al principio del div';
miDiv.insertAdjacentElement('afterbegin', otroParrafo);

// Insertar un tercer párrafo después del div
var tercerParrafo = document.createElement('p');
tercerParrafo.textContent = 'Este es un tercer párrafo insertado después del div';
miDiv.insertAdjacentElement('afterend', tercerParrafo);

var cuartoParrafo = document.createElement('p');
cuartoParrafo.textContent = 'Este es otro párrafo beforeend';
miDiv.insertAdjacentElement('beforeend', cuartoParrafo);
