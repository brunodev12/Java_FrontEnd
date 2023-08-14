class Libro {
    constructor(ISBN, titulo, autor, numeroPaginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
}

const crearLibroBtn = document.getElementById("crear-libro");
const containerInputs = document.getElementById("input-container");
const mostrarLibrosBtn = document.getElementById("mostrar-libros");
const borrarLibrosBtn = document.getElementById("borrar-libros");
const borrarPorIdBtn = document.getElementById("borrar-por-id");
const isbnInput = document.getElementById("isbn-input");
const tablaLibros = document.getElementById("tabla-libros");
var check = true;
var libros = [];

function borrarLibros() {
    containerInputs.innerHTML = "";
    check = true;
}

crearLibroBtn.addEventListener('click', function () {
    if (check) {
        let label1 = document.createElement("label");
        label1.textContent = "ISBN: "
        let input1 = document.createElement("input");
        input1.type = "text";
        input1.name = "ISBN";
        containerInputs.appendChild(label1);
        containerInputs.appendChild(input1);
        containerInputs.appendChild(document.createElement("br"));

        let label2 = document.createElement("label");
        label2.textContent = "Titulo: "
        let input2 = document.createElement("input");
        input2.type = "text";
        input2.name = "Titulo";
        containerInputs.appendChild(label2);
        containerInputs.appendChild(input2);
        containerInputs.appendChild(document.createElement("br"));

        let label3 = document.createElement("label");
        label3.textContent = "Autor: "
        let input3 = document.createElement("input");
        input3.type = "text";
        input3.name = "Autor";
        containerInputs.appendChild(label3);
        containerInputs.appendChild(input3);
        containerInputs.appendChild(document.createElement("br"));

        let label4 = document.createElement("label");
        label4.textContent = "Numero de paginas: "
        let input4 = document.createElement("input");
        input4.type = "number";
        input4.name = "NumeroPaginas";
        input4.min = 0;
        containerInputs.appendChild(label4);
        containerInputs.appendChild(input4);
        containerInputs.appendChild(document.createElement("br"));

        check = false;

        let buttonSave = document.createElement("button");
        buttonSave.id = "guardar-libro";
        buttonSave.textContent = "Guardar libro";
        buttonSave.addEventListener('click', function () {
            var isbnValue = input1.value;
            var tituloValue = input2.value;
            var autorValue = input3.value;
            var numeroPaginasValue = input4.value;

            if (isbnValue !== "" && tituloValue !== "" && autorValue !== "" && numeroPaginasValue !== "") {
                var libro = new Libro(isbnValue, tituloValue, autorValue, numeroPaginasValue);
                libros.push(libro);
                borrarLibros();
            } else {
                alert("Por favor, complete todos los campos antes de guardar.");
            }

        });
        containerInputs.appendChild(buttonSave)

        let cleanButton = document.createElement("button");
        cleanButton.textContent = "Borrar libro";

        cleanButton.addEventListener("click", borrarLibros)

        containerInputs.appendChild(cleanButton);

    }
});

mostrarLibrosBtn.addEventListener("click", function () {

    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");


    var headers = ["ISBN", "Titulo", "Autor", "Numero de paginas"];
    var headerRow = document.createElement("tr");
    headers.forEach(function (headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    libros.forEach(function (libro) {
        var tr = document.createElement("tr");
        var tdISBN = document.createElement("td");
        tdISBN.textContent = libro.ISBN;
        var tdTitulo = document.createElement("td");
        tdTitulo.textContent = libro.titulo;
        var tdAutor = document.createElement("td");
        tdAutor.textContent = libro.autor;
        var tdNumeroPaginas = document.createElement("td");
        tdNumeroPaginas.textContent = libro.numeroPaginas;

        tr.appendChild(tdISBN);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdAutor);
        tr.appendChild(tdNumeroPaginas);
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    tablaLibros.innerHTML = "";
    tablaLibros.appendChild(table);
});

borrarLibrosBtn.addEventListener('click', function(){
    libros = [];
    tablaLibros.innerHTML = "";
})

borrarPorIdBtn.addEventListener("click", function() {
    var isbnToDelete = isbnInput.value;

    // Buscar el índice del libro con el ISBN ingresado
    var indexToDelete = -1;
    for (var i = 0; i < libros.length; i++) {
        if (libros[i].ISBN === isbnToDelete) {
            indexToDelete = i;
            break;
        }
    }

    if (indexToDelete !== -1) {
        libros.splice(indexToDelete, 1); // Eliminar el libro del array
        alert("Libro con ISBN " + isbnToDelete + " borrado.");
    } else {
        alert("No se encontró un libro con el ISBN " + isbnToDelete + ".");
    }
});