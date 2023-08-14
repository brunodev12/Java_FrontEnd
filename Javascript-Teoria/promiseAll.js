// Función que simula una solicitud asíncrona a un servidor
function obtenerDatos(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const datos = { id, nombre: `Ejemplo ${id}` };
        resolve(datos);
      }, Math.random() * 1000); // Simulamos una demora aleatoria de hasta 1 segundo
    });
  }
  
  // Función principal que realiza múltiples solicitudes simultáneamente
  async function realizarSolicitudesConPromiseAll() {
    try {
      console.log("Iniciando solicitudes...");
  
      // Crear un arreglo de promesas para las solicitudes
      const solicitudes = [
        obtenerDatos(1),
        obtenerDatos(2),
        obtenerDatos(3)
      ];
  
      // Esperar a que todas las promesas se resuelvan simultáneamente
      const resultados = await Promise.all(solicitudes);
  
      console.log("Datos obtenidos:", resultados);
  
      console.log("Todas las solicitudes completadas.");
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }
  
  // Llamamos a la función principal
  realizarSolicitudesConPromiseAll();
  