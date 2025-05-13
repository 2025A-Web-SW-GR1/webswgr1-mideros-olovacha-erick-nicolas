console.log("Hola Typescript");
// var nombre = "algo"; (PERO NO SE VA A USAR VAR)
// TIPOS DE DATOS
var nombres = "Erick";
//nombres = 1; (ya me dice que nombres no puede ser un numero)
// En TS 
var nombreTS = "";
console.log(typeof nombres, "nombres");
var numeros = 1;
var numerosTS = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; //Decimales
console.log(typeof numeros, "numeros decimales");
// En TS el ; es opcional
var booleanos = true;
var booleanosTS = false;
booleanos = false;
console.log(typeof booleanos, "booleanos");
var nulos = true;
var nulosTS = null;
console.log(typeof nulos, "nulos");
var arreglos = [];
var arreglosTS = [];
var arreglosTS2 = [];
console.log(typeof arreglos, "arreglos");
var objetos = {};
var objetosTS = {};
console.log(typeof objetos, "objetos");
var undefineds = undefined;
var undefinedsTS = undefined;
console.log(typeof undefineds, "undefineds");
// En resumen, en JS existen solo 5 variables
//Truty y Falsy 
var trutyFalsy;
trutyFalsy = "";
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = "a";
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = "-1";
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = "0";
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = "1";
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = null;
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = {};
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
trutyFalsy = [];
if (trutyFalsy) {
    console.log("Truty");
}
else {
    console.log("falsy");
}
