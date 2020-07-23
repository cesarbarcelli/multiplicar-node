// requireds
const fs = require('fs');
//const colors = require('colors');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    console.log('======================'.green);
    console.log(`===tabla de ${base}===`.green);
    console.log('======================'.green);

    for (let i = 1; i <= limite; i++) {
        //console.log(`${ base } * ${ i } = ${ base * i}`);
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }


}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, rejects) => {
        let data = '';

        if (!Number(base)) {
            rejects(`El valor introducido ${base} no es número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            //console.log(`${ base } * ${ i } = ${ base * i}`);
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`./tablas/tabala-${base}-al-limite-${limite}.txt`, data, (err) => {
            if (err)
                rejects(err)
            else
                resolve(`tabla-${base}-al-limite${limite}.txt`);
            //console.log(`El Archivo tabla${base}.txt ha sido creado!`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}