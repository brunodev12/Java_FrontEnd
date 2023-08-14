// Función que simula una solicitud asíncrona a un servidor
function obtenerDatos(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datos = { id, nombre: `Ejemplo ${id}` };
            resolve(datos);
        }, 1000); // Simulamos una demora de 1 segundo
    });
}

// Función asíncrona que realiza múltiples solicitudes y espera a que todas se completen
async function realizarSolicitudes() {
    try {
        console.log("Iniciando solicitudes...");

        const solicitud1 = obtenerDatos(1);
        const solicitud2 = obtenerDatos(2);

        // Esperar a que ambas solicitudes se completen
        const resultado1 = await solicitud1;
        const resultado2 = await solicitud2;

        console.log("Datos obtenidos:", resultado1, resultado2);

        console.log("Todas las solicitudes completadas.");
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

// Llamamos a la función principal
realizarSolicitudes();
