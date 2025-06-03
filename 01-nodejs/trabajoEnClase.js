// Callbacks
const fs = require('fs');

fs.readFile('./a.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error('Error al leer:', err);
    }

    const nuevaData = data + '\t' + new Date().toString();

    fs.writeFile('./a.txt', nuevaData, 'utf8', (err) => {
        if (err) {
            return console.error('Error al escribir:', err);
        }
        fs.readFile('./a.txt', 'utf8', (err, resultado) => {
            if (err) return console.error('Error al verificar (callback):', err);
            console.log('\n[Callback] Resultado:\n', resultado);
        });
    });
});

// Con promesas (then y catch)

const fsPromesa = require('fs').promises;

fsPromesa.readFile('./a.txt', 'utf8')
    .then((data) => {
        const nuevaData = data + '\t' + new Date().toString();
        return fsPromesa.writeFile('./a.txt', nuevaData, 'utf8');
    })
    .then(() => fsPromesa.readFile('./a.txt', 'utf8'))
    .then((resultado) => {
        console.log('\n[Promesas then/catch] Resultado:\n', resultado);
    })
    .catch((err) => {
        console.error('Error (then/catch):', err);
    });

// Con Promesas (async await)
const fsAsync = require('fs').promises;

async function actualizarArchivo() {
    try {
        const data = await fsAsync.readFile('./a.txt', 'utf8');
        const nuevaData = data + '\t' + new Date().toString();
        await fsAsync.writeFile('./a.txt', nuevaData, 'utf8');
        const resultado = await fsAsync.readFile('./a.txt', 'utf8');
        console.log('\n[Async/Await] Resultado:\n', resultado);
    } catch (err) {
        console.error('Error (async/await):', err);
    }
}

actualizarArchivo();