const { crearArchivo } = require('./mutiplicar/multiplicar')
const colors = require('colors/safe');

const argv = require('yargs').command('listar', 'Imprime la tabla en consola', {
    base: {
        demand: true,
        alias: 'b'
    }
}).argv

console.log(colors.red(argv.base));
// console.log(argv2);

// crearArchivo(base).then(archivo => {
//     console.log(`Archivo creado ${ archivo }`);
// }).catch(e => {
//     console.log(e);
// })