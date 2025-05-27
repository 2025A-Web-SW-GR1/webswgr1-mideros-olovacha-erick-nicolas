// Estamos en el LADO SERVIDOR
const fs = require('fs'); //importar libreria fs (file system)
console.log("Primero");
/* fs.readFile(
    './a.txt', // path
    'utf-8', //codificacion
    (errorLectura, contenido) => { // Aquí es la primera vez que es seguro que se ha dado una respuesta. A esto se le conoce como callback
        if(errorLectura){
            console.error('ERROR lectura 1');
        }else{
            console.log('Tercero', contenido)
        }
    }
); 
*/
fs.writeFile( 
    './a.txt', // path
    'Hola!' + new Date().toString(), // nuevo contenido
    (errorLectura, contenido) => { // callbacks!!
        if(errorLectura){
            console.error('ERROR escritura');
        }else{
            console.log('Archivo escrito')
        }
    }
);
console.log("Segundo");