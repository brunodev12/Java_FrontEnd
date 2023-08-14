const edadInput = document.getElementById("edad-input");
const textContainer = document.getElementById("text-container");

edadInput.addEventListener("input", function() {
    checkEdad(edadInput.value);
});

function checkEdad(_edad){
    let edad = parseInt(_edad);

    if(edad >= 18){
        textContainer.textContent = 'Usted es mayor de edad';
    } else if (edad < 18) {
        textContainer.textContent = 'Usted es menor de edad';
    } else {
        textContainer.textContent = '';
    }

}