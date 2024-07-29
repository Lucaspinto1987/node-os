const os = require('os');

// creo las constantes para obtener los datos del sistema.
const nombre = os.platform();
const tipo = os.type();
const version = os.release();
const arquitectura = os.arch();
const cpus = os.cpus().length;
const memoriaTotalMB = (os.totalmem()/ 1024 / 1024).toFixed(2) ;  // Convertir bytes a MB
const memoriaLibreMB = (os.freemem() / 1024 / 1024).toFixed(2);  // Convertir bytes a MB

console.log(`Nombre: ${nombre}`);
console.log(`Tipo: ${tipo}`);
console.log(`Versión: ${version}`);
console.log(`Arquitectura: ${arquitectura}`);
console.log(`CPUs: ${cpus}`);
console.log(`MemoriaTotal: ${memoriaTotalMB} MB`);
console.log(`MemoriaLibre: ${memoriaLibreMB} MB`);
