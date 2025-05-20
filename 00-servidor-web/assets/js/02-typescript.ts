console.log("Hola Typescript");

// var nombre = "algo"; (PERO NO SE VA A USAR VAR)

// TIPOS DE DATOS
let nombres = "Erick"; 
//nombres = 1; (ya me dice que nombres no puede ser un numero)

// En TS 
let nombreTS: string = ""; 
console.log(typeof nombres, "nombres");
let numeros = 1; 
let numerosTS: number = 1;
console.log(typeof numeros, "numeros"); 
numeros = 1.1; //Decimales
console.log(typeof numeros, "numeros decimales");
// En TS el ; es opcional

let booleanos = true; 
let booleanosTS: boolean = false; 
booleanos = false;
console.log(typeof booleanos, "booleanos");
let nulos = true; 
let nulosTS: null = null;
console.log(typeof nulos, "nulos"); 

let arreglos = [];
let arreglosTS: number[] = [];
let arreglosTS2: Array<number> = [];
console.log(typeof arreglos, "arreglos"); 

let objetos = {};
let objetosTS: object = {}; 
console.log(typeof objetos, "objetos");

let undefineds = undefined;
let undefinedsTS: undefined = undefined; 
console.log(typeof undefineds, "undefineds");

// En resumen, en JS existen solo 5 variables

//Truty y Falsy 
let trutyFalsy:any; 
trutyFalsy = "";
if(trutyFalsy){
    console.log("Truty"); 
} else {
    console.log("falsy"); 
}

trutyFalsy = "a";
if(trutyFalsy){
    console.log("Truty"); 
} else {
    console.log("falsy"); 
}

trutyFalsy = "-1";
if(trutyFalsy){
    console.log("Truty"); 
} else {
    console.log("falsy"); 
}

trutyFalsy = "0"; // FALSO POSITIVO, pues es falso en JS cuando el 0 está definido
if(trutyFalsy){
    console.log("Truty"); 
} else {
    console.log("falsy"); 
}

trutyFalsy = "1";
if(trutyFalsy){
    console.log("Truty"); 
} else {
    console.log("falsy"); 
}

trutyFalsy = null;
if(trutyFalsy){
    console.log("Truty"); 
} else {
    console.log("falsy"); 
}

trutyFalsy = {};
if(trutyFalsy){
    console.log("Truty"); 
} else {
    console.log("falsy"); 
}

trutyFalsy = [];
if(trutyFalsy){
    console.log("Truty"); 
} else {
    console.log("falsy"); 
}

const erick:any ={
    "nombre" : "Erick",
    'apellido' : 'Mideros',
    edad: 36,
    hijos: 1,
    casado: true,
    zapatos: undefined,
    ropa: {
        color: "plomo",
        talla: 40
    },
    mascotas: ['Cache', 'Peque', 'Pandi']
};
console.log(erick);
//Acceder a las propiedades
erick.nombre //"Erick"
erick["apellido"] //"Mideros" 
// Modificar (reasignar)
erick.nombre = "Erick";
erick["nombre"] = "Erick"; 
// erick = {}; ERROR
// Crear atributps
erick.sueldo = 1.2; 
erick["gastos"] = 0.8;
// Eliminar propiedades
erick.nombre = undefined; 
delete erick.nombre;

// IMPORTANTE EN JS: 
// Variables por valor o referencia (punteros, que en realidad no existen en JS)

// Variables por valor: Primitivas (number, string, boolean)
let edadErick = 33;
let edadSon = edadErick; // CLONANDO el primitivo, son variables independitentes
console.log(edadSon); //33
console.log(edadErick); //33

edadErick = edadErick + 1;
console.log(edadErick); //34
console.log(edadSon); //33

// Variables por referencia
// Object: {}, [] (no se clonan ya que no son primitivas)

let notas = {
    total: 10, 
}; 
let notas2doBi = notas; //REFERENCIA
notas2doBi.total = notas2doBi.total+1;
console.log(notas); //{total: 11}
console.log(notas2doBi) // {total: 11}

//Cómo clonar? 

// Forma 1
let notasClonadasUno = Object.assign({}, notas);
let arregloACopiar = [1,2,3]; 
let arregloClonado = Object.assign(
    [], arregloACopiar
); // arr
notasClonadasUno.total = notasClonadasUno.total +1;
console.log(notas); //{total: 11 }
console.log(notas2doBi) // {total: 11}
console.log(notasClonadasUno) // {total: 12} ya que al valor que se le sumó 1 es al clonado

// Arreglos
const arregloEjemplo = [1,2,3,4,5];
// for of (obtenemos el VALOR)
for (let valorDelArreglo of arregloEjemplo){
    console.log('Valor: ', valorDelArreglo);
}

// for in (obtenemos el INDICE)
for (let indiceDelArreglo in arregloEjemplo){
    console.log('Indice: ', indiceDelArreglo);
    console.log('Valor: ', arregloEjemplo[indiceDelArreglo]); 
}

// Añadir el FINAL de un elemento
arregloEjemplo.push(6); //[1,2,3,4,5,6]
// Eliminar el ultimo elemento
arregloEjemplo.pop(); //[1,2,3,4,5]
// Añadir al principio del arreglo
arregloEjemplo.unshift(0); // [0,1,2,3,4,5]
// Eliminar y agregar elementos
// splice   - indice donde empezar
//          - numero elementos a eliminar
//          - elemento a añadir
arregloEjemplo.splice(
    0, //empezamos en el indice 0
    3, // eliminamos 3 elementos
    3,4,5
); // [0,1,2,3,4,5] --- arreglo original
// [0,1,2] --- eliminados
// [3,4,5,3,4,5] ---- arreglo final

// Operadores para trabajar arreglos

// find
//

// Funciones 
function soloNumeros(a,b,c){
    return a-b+c;
}

function soloNumerosTs(
    a:number, b:number, c:number
): number {
    return a-b+c;
}

function soloImprimir(texto:string):void{
    console.log(texto);
}

function soloImprimir2(texto:string):undefined{
    console.log(texto);
}

// Funciones nombrada
function nombreDeMiFuncion(){}

//Funciones anonimas
const funcionesSinNombre = function(){};
nombreDeMiFuncion();
funcionesSinNombre();
[].forEach(function(){});
// Fat Arrow Function
const funcionFatArrow = (
    a:number, b:number
):number => {
    return a+b;
};
const funcionFatArrowSinParametros = () =>{
    console.log('Sin parametros'); 
};
const funcionFAOmitirReturn = (a,b) => a+b;
const unSoloParametroSinParentesis = a => a*a;
// Parametros infinitos
function sumarNumeros(
    ...todosNumeros:number[]
): number{
    let total = 0;
    for (let valorNumero of todosNumeros){
        total = total + valorNumero;
    }
    return total;
}
sumarNumeros(1,2,3,4,5,2,1,2,3,4,5)

