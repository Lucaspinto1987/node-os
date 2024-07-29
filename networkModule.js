const os = require('os');

const networkInterfaces = os.networkInterfaces(); //obtengo la informacion de las interfaces de red 

// creo un bucle For para recorrer cada interfaz y sacar sacar la Familia, dirección e Interno.
for (const [interfaceName, direcciones] of Object.entries(networkInterfaces)) {
  console.log(`Interfaz ${interfaceName}:`);
  
  direcciones.forEach((address) => {      //iteramos sobre cada interfaz y sus direcciones
    console.log(`  Familia: ${address.family}`);
    console.log(`  Dirección: ${address.address}`);
    console.log(`  Interno: ${address.internal}`);
  });
}
module.exports = networkInterfaces;