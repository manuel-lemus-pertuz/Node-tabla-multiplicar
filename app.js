const { CrearArchivo } = require('./Acciones/multiplicar');
const argv = require('./Config/yargs');
                
console.clear();

CrearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));







