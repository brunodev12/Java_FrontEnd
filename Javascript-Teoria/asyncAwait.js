// Función que simula una solicitud asíncrona a un servidor
function obtenerDatos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const datos = { id: 1, nombre: "Ejemplo" };
        resolve(datos);
      }, 1000); // Simulamos una demora de 1 segundo
    });
  }
  
  // Función asíncrona que utiliza async/await para manejar la solicitud
  async function manejarSolicitud() {
    try {
      console.log("Iniciando solicitud...");
      
      const resultado = await obtenerDatos();
      console.log("Datos obtenidos:", resultado);
      
      console.log("Solicitud completada.");
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }
  
  // Llamamos a la función principal
  manejarSolicitud();
  