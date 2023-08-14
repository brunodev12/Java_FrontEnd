function logMyErrors(arg) {
    console.log(arg)
}

try {
    throw "miExcepcion"; // genera una excepción
} catch (e) {
    // sentencias para manejar cualquier excepción
    logMyErrors(e); // pasa el objeto de la excepción al manejador de
    //errores
}

function isValidJSON(text) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}

console.log(isValidJSON('{"Nombre":"Bruno"}'))

function logMyErrors(arg) {
    console.log(arg)
}

try {
    miRutina(); // puede lanzar tres tipos de excepciones
} catch (e) {
    if (e instanceof TypeError) {
        // sentencias para manejar excepciones TypeError
    } else if (e instanceof RangeError) {
        // sentencias para manejar excepciones RangeError
    } else if (e instanceof EvalError) {
        // sentencias para manejar excepciones EvalError
    } else if (e instanceof ReferenceError) {
        console.error("Ocurrió un ReferenceError:", e.message);
    } else {
        // sentencias para manejar cualquier excepción no especificada
        logMyErrors(e); // pasa el objeto de la excepción al manejador de
        // errores
    }
}

function logMyErrors(arg) {
    console.log(arg);
}

function miRutina() {
    undefinedFunction(); // Esto generará un ReferenceError
}

try {
    miRutina(); // Puede lanzar un ReferenceError
} catch (e) {
    if (e instanceof ReferenceError) {
        console.error("Ocurrió un ReferenceError:", e.message);
        // sentencias para manejar excepciones ReferenceError
    } else {
        console.error("Ocurrió una excepción no especificada:", e.message);
        // sentencias para manejar cualquier excepción no especificada
        logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
    }
}
