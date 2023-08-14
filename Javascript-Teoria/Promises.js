function getData() {
    return new Promise(function (resolve, reject) {
        // Simulando una llamada a una API con un retraso
        setTimeout(function () {
            const data = { message: "Datos recuperados exitosamente" };
            resolve(data); // Resuelve la promesa con los datos
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Llamada a la función getData() y manejo de la promesa resultante
getData()
    .then(function (result) {
        console.log("Éxito:", result.message);
    })
    .catch(function (error) {
        console.error("Error:", error);
    });

    
function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const randomValue = Math.random();
            if (randomValue > 0.5) {
                resolve("¡Operación exitosa!");
            } else {
                reject("¡Algo salió mal!");
            }
        }, 2000);
    });
}

getData()
    .then(function (result) {
        console.log("Éxito:", result);
    })
    .catch(function (error) {
        console.error("Error:", error);
    })
    .finally(function () {
        console.log("Operación finalizada, independientemente del resultado.");
    });

