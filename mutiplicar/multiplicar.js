const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = ""

        if (!Number(base)) {
            reject('No es un numero')
            return
        }

        for (let i = 1; i <= 10; i++) {
            data += `${ base } x ${ i } = ${ base*i }\n`
        }

        fs.writeFile('tabla.txt', data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve('tabla')
            }
        })
    })
}

module.exports = {
    crearArchivo
}