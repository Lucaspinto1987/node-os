const os = require('os');

const networkInterfaces = os.networkInterfaces();

// creo un bucle For para recorrer cada interfaz y sacar sacar la Familia, dirección e Interno.
for (const [interfaceName, direcciones] of Object.entries(networkInterfaces)) {
  console.log(`Interfaz ${interfaceName}:`);
  
  direcciones.forEach((address) => {
    console.log(`  Familia: ${address.family}`);
    console.log(`  Dirección: ${address.address}`);
    console.log(`  Interno: ${address.internal}`);
  });
}
