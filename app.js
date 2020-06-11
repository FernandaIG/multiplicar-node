const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.magenta(archivo)))
            .catch(err => console.log(err));

        break;
    default:
        console.log('Comando no reconocido');
        break;
}



// console.log(process.argv);
// let argv2 = process.argv;
// console.log(argv2);

// console.log(argv.base);

// let parametro =  argv[2];
// let base = parametro.split('=')[1];

// console.log(base);



// console.log(module);