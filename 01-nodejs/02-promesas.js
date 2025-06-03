const fs = require('fs');
const { console } = require('inspector');

function promesaEsPar(numero){
    const miPrimeraPromesa = new Promise(
        (resolve,reject)=>{
            if(numero % 2 == 0){
                resolve(numero); // RETURN
            }else{
                reject('No es par!'); // THROW
            }
        }
    );
    return miPrimeraPromesa
}

function promesaElevarAlCuadrado(numero){
    return new Promise(res=>res(numero*numero));
}

promesaEsPar(5) //async
    .then(
        (respuestaEsPar)=>{
            console.log('Es par', respuestaEsPar);
            return promesaElevarAlCuadrado(
                respuestaEsPar
            );
        }
    )
    .then( //try
            (respuestaElevarCuadrado)=>{
                console.log('Elevado: ',
                    respuestaElevarCuadrado); 
            } 
    )
    .catch(
        (respuestaError)=>{
            console.log('NO ES PAR', respuestaError);
        }
    );

function leerArchivoPromesa(nombreArchivo){
    return new Promise(
        (res, rej)=>{
            fs.readFile(
                nombreArchivo, //path
                'utf-8', //codificacion
                (errorLectura, contenido) => {
                    if(errorLectura){
                        rej(errorLectura);
                    }else{
                        res(contenido);
                    }
                }
            );
        }
    );
}
leerArchivoPromesa('.a.txt')
    .then(
        (contenidoArchivo)=>{
            console.log('Contenido:', contenidoArchivo);
        }
    ).catch(
        (error)=>{
            console.error('ERROR:', error);
        }
    );
// const correrLogicaPromesas2 = async ()=>{} //ESTO ES LO MISMO QUE ABAJO 
// ASYNC AWAIT
// REGLAS:
// 1) Estamos dentro de una funcion nombrada, anonima o fat arrow
// 2) Agregar la palabra 'ASYNC' antes de la declaracion de la funcion
// 3) Agregar la palabra 'AWAIT' dento de un bloque TRY CATCH antes de la promesa
async function corregirLogicaPromesas() {
    try {
        const respuestaLeerArchivo = await leerArchivoPromesa('./a.txt');
        console.log('1) Respuesta Archivo', respuestaLeerArchivo);
        const respuestaLeerArchivo2 = await leerArchivoPromesa('./a.txt');
        console.log('2) Respuesta Archivo', respuestaLeerArchivo);
        await leerArchivoPromesa('./a123.txt');
    } catch (error){
        console.log('3) ERROR', error);
    }
}
corregirLogicaPromesas().then().catch(); // async awair transforma a la funcion en una PROMESA
    


    