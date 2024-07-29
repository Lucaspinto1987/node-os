
// ESTA ES LA MANERA QUE LO HICE Y PRESENTE...

// // creo las constantes para obtener los datos del sistema.
// const nombre = os.platform();
// const tipo = os.type();
// const version = os.release();
// const arquitectura = os.arch();
// const cpus = os.cpus().length; // tuve que poner .length para que me tome la cantidad ya que sino me imprime un array de objetos ([object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object])
// const memoriaTotalMB = (os.totalmem()/ 1024 / 1024).toFixed(2) ;  // Convertir bytes a MB  se divide dos veces porque primero convirte bytes a kilobytes y luego kilobytes a megabytes
// const memoriaLibreMB = (os.freemem() / 1024 / 1024).toFixed(2);  // toFixed es un metodo que formatea el numero resultante, en este caso a dos decimales para que sea mas legible.

// console.log(`Nombre: ${nombre}`);
// console.log(`Tipo: ${tipo}`);
// console.log(`Versión: ${version}`);
// console.log(`Arquitectura: ${arquitectura}`);
// console.log(`CPUs: ${cpus}`);
// console.log(`MemoriaTotal: ${memoriaTotalMB} MB`);
// console.log(`MemoriaLibre: ${memoriaLibreMB} MB`);

// module.exports = os;

// ESTA ES LA MANERA QUE LO HIZO DATA EN CLASE.

const os = require('os');

const obtenetInformacionOs = () => {
    return  {
        Nombre: `${os.platform()}`,
        Tipo: `${os.type()}`,
        Version: `${os.version()}`,
        Arquitectura:`${os.arch()}`,
        Cpus: `${os.cpus().length}`, 
        MemoriaTotalMB: `${(os.totalmem()/ 1024 / 1024).toFixed(2)} MB`,
        MemoriaLibreMB: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
    }
}
console.log(obtenetInformacionOs());
module.exports = obtenetInformacionOs;