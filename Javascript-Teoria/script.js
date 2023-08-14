function sumar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}

function restar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
}

function dividir() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;
}
