const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla'
                })
                .options( 'l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .options( 'h', {
                    alias: 'lhasta',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'Hasta que número llega la tabla'
                })
                .check ((argv, options) => {
                    if ( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;