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
