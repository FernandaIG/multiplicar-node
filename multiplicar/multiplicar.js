const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {//definir valores por defecto

    console.log('=================='.magenta);
    console.log(`===Tabla de ${base}===`.magenta);
    console.log('=================='.magenta);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
        
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolv, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${base}, no es un numero`);
            return
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            // let res = base * i;
            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err){
                reject(err)
            }else {
                resolv(`tabla-${base}-al-${limite}.txt`)
            }
            // console.log(`El archivo tabla-${base} ha sido creado!`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

