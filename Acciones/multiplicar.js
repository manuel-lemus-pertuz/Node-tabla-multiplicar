
const fs = require('fs');

const colors = require('colors');
const argv = require('../Config/yargs');

const CrearArchivo = async( base, listar, hasta ) => {

    try{
        

        let salida, consola = '';

        for ( let i = 1; i <= argv.h; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.yellow}  ${i} ${'='.yellow} ${base * i}\n`;
        }

        if (listar){
            console.log('========================'.green);
            console.log('     Tabla del ',colors.gray(base));
            console.log('========================'.green);
            console.log(consola);
        }
        

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)

        return `Tabla del ${base} txt creada`;

    } catch (err) {
        throw err;
    }

    
}

module.exports = { 
    CrearArchivo 
}

