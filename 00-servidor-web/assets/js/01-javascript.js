console.log("Mundo");
// Tipos de variables JS
// Existen: variables mutables 
let nombre = "Erick"; 
nombre = "Ernesto";
//nombre = 1; 
//nombre = function(){
//    return 1
//}

// JAVASCRIPT no es un lenguaje altamente tipado, es decir que no es necesario especificar el tipo de varibale

// Typescript nos ayuda a transpilar (tipo de compilación) para producir la version de JS que se necesite

// Las versiones antiguas y nuevas de JS se diferencian en la amplitud para escribir, por lo que con Typescript
// se puede trabajar con la últimas actualizaciones de JS y TS y adecuarlos a las versiones que se requiera

// Varibales inmutables
const cedula = 11111111111; 
// cedula = 1; (no se puede porque: Uncaught TypeError: Assignment to constant variable.
//    at 01-javascript.js:20:8)