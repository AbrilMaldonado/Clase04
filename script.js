/*let text = "Hola Guayerd";

console.log("La longitud del string es: " + text.length);
console.log("La posicion de un caracter: " + text.charAt(0));
console.log("Todo el texto en minusculas: " + text.toLowerCase());
console.log("Todo el texto en mayuscula: " + text.toUpperCase());
console.log("Posicion de la G: " + text.indexOf("G"));
console.log("Reemplazamos las A: " + text.replace("o","u"));
console.log("Verificar si contiene G: " + text.includes("G"));
console.log("Verificar si contiene X: " + text.includes("X)"));
console.log("Corta una parte: " + text.slice(0,3)); 


//EJERCICIOS CON CADENA DE TEXTO//


////EJERCICIO 1////

let text = prompt("Ingrese un texto");
console.log("Contiene A: " + text.includes("A")); 


////EJERCICIO 2////

let text = prompt("Ingrese un texto");
console.log("Texto en minuscula: " + text.toLowerCase());
console.log("Texto en mayuscula: " + text.toUpperCase()); 


////EJERCICIO 3////

let palabra = prompt("Ingrese una palabra");
console.log(palabra.charAt(0)); 


////EJERCICIO 4////

let frase = prompt("Ingrese una frase");
console.log(frase.length);  


////EJERCICIO 5////
let numero = prompt("Ingrese un número");
console.log(numero.length);  


////EJERCICIO 6//// 
let text = prompt("Ingrese una palabra"); 
alert("Su palabra termina con la letra " + text.charAt(text.lenght -1));


////EJERCICIO 7////
let text = "Hola, mi nombre es Abril";
console.log(text.replace(" ","*")); 


////EJERCICIO 8//// 
let letter = prompt("Ingrese una letra");
let text = prompt("Ingrese un texto");
console.log(text.includes(letter)); 


////EJERCICIO 9////
let text = prompt("Ingrese un texto"); 
alert(text.slice(0));  


////EJERCICIO 10////

let nombre = prompt("Ingrese su nombre en minuscula");
alert(nombre.slice(0, 1).toUpperCase() + nombre.slice(1));  */





///////////CONDICIONALES//////




/* const number = parseInt(10);
let number2 = parseInt(prompt("Ingrese un numero"));
let intentos = 0;
intentos += 1;

if (number2 === number){
    alert("Ganaste!");
} else if (number2>number){
    alert("Es mayor");
} else {
    alert("Es menor");
} 



///EJERCICIOS CON CONDICIONALES///

//EJERCICIO 1//

let metros = parseInt(prompt ("Ingrese una medida en metros"));
let pies = (metros * 3,28084);
let centímetros = (metros * 100);
let pulgadas = (metros * 39,3701);


if (!isNaN(metros)){
    console.log ("La medida en pies es " + pies);
    console.log ("La medida en centímetros es " + centímetros);
    console.log ("La medida en pulgadas es " + pulgadas); 
} else {
    alert("Error!");
}  


//EJERCICIO 2//

let edad = parseInt(prompt("Ingrese su edad"));

if (edad<18) {
    alert("Usted es menor de edad");
} else {
    alert("Usted es mayor de edad");
}  


//EJERCICIO 3//

let sabores = prompt("Ingrese 2 sabores de helado");
let salsa = prompt("Lo quiere con cobertura de chocolate?");

if (salsa === "si") {
    alert("Su helado sabor " + sabores + "con cobertura de chocolate cuesta $180");
} else {
    alert("Su helado sabor " + sabores + "cuesta $150");
}  


//EJERCICIO 4//

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
let resultado = (num1+num2);
console.log(resultado);

if (resultado % 2 === 0) {
    alert("La suma de los numeros introducidos es par");
} else {
    alert("La suma de los numeros introducidos es impar");
}  


//EJERCICIO 5//

let num = parseInt(prompt("Ingrese un numero"));

if (num>0) {
    alert("Es positivo")
} else if (num<0) {
    alert("Es negativo");
} else {
    alert("Es 0");
}  


//EJERCICIO 6//

let monto = parseInt(prompt("Ingrese un monto"));
let dto = ((monto * 10) / 100);
let total = monto - dto;

if (monto>2000) {
    alert("Su total a pagar es " + total);
} else {
    alert("Su total a pagar es " + monto);  
} 


//EJERCICIO 7//

let text = prompt("Ingrese una cadena de texto");
let posicion = parseInt(prompt("Ingrese una posicion"));  
let posicionletra = text.charAt(posicion)

if (posicionletra==="a" || posicionletra==="e" || posicionletra==="i" || posicionletra==="o" || posicionletra==="u") {
    alert("El digito de la posicion " + posicion + " es una vocal, es la letra " + posicionletra);
} else {
    alert("No es una vocal");
}

//EJERCICIO 8//

let nota = parseInt(prompt("Ingrese una nota del 1 al 10"));

switch (nota) {
    case 1:
    case 2:
    case 3:
        alert("Aplazado");
        break;
    case 4:
    case 5:
        alert("Reprobado");
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert("Aprobado");
        break;
    default:
        alert("El numero ingresado no es valido, ingrese un numero del 1 al 10");                           
}  


//EJERCICIO 9//

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));

if (num1 === num2) {
    alert("Los numeros son iguales");
} else if (num1>num2) {
    alert("El numero " + num1 + " es mayor");
} else {
    alert("El numero " + num2 + "es mayor");
}   


//EJERCICIO 10//

let mes = parseInt(prompt("Ingrese un mes del 1 al 12"));

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("El mes tiene 31 dias");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("El mes tiene 30 dias");
        break;
    case 2:
        alert("El mes tiene 28/29 dias");
        break;
    default:
        alert("El numero ingresado no es valido, ingrese un mes del 1 al 12");                        
}  


//EJERCICIO 11//

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercer numero"));

if (num1>num2 && num1>num3) {
    alert ("El numero " + num1 + " es el mayor");
} else if (num2>num1 && num2>num3) {
    alert("El numero " + num2 + " es el mayor");
} else {
    alert("El numero " + num3 + " es el mayor");
} 


//EJERCICIO 12// 

const cerveza = 100;
const jugo = 50;
const agua = 20;
let costo = 0;
let edad = parseInt(prompt("Por favor ingrese su edad"));
let bebida = prompt("Que desea tomar? Tenemos cerveza, jugo y agua");

if (edad<18 && bebida==="cerveza") {
    alert("Usted es menor de edad, por favor elija otra bebida");
} else if (bebida==="cerveza") {
    alert("La cerveza esta $" + cerveza);
    costo=cerveza;
} else if (bebida==="jugo") {
    alert("El jugo esta $" + jugo);
    costo=jugo
} else if (bebida==="agua") {
    alert("El agua esta $" + agua);
    costo=agua
}

let pago = parseInt(prompt("Con cuanto va a abonar?"));
let vuelto = 0;

if (pago < costo) {
    alert("El dinero abonado $" + pago + "es menor al costo de tu " + bebida);
} else {
    vuelto - pago - costo;
    alert("Su vuelto es $" + vuelto);
}


//EJERCICIO 13//

let mes = parseInt(prompt("Ingrese el numero de un mes, del 1 al 12"));

switch (mes) {
    case 1:
        alert("Enero");
        break;
    case 2: 
        alert("Febrero");
        break;
    case 3:
        alert("Marzo");
        break;
    case 4:
        alert("Abril");
        break;
    case 5:
        alert("Mayo");
        break;
    case 6:
        alert("Junio");
        break;
    case 7:
        alert("Julio");
        break;
    case 8:
        alert("Agosto");
        break;
    case 9:
        alert("Septiembre");
        break;
    case 10:
        alert("Octubre");
        break;
    case 11:
        alert("Noviembre");
        break;
    case 12:
        alert("Diciembre");
        break;
    default:
        alert("El numero ingresado no es valido, por favor ingrese con numeros un mes del 1 al 12");
}  



///BONUS///

//EJ 1//

let pass = parseInt(1234);
pw = parseInt(prompt("Ingrese su clave"));
let dinero = parseInt(5000);


if (pass !== pw) {
    alert("La clave es incorrecta");
} else {
   money = parseInt(prompt("¿Cuanto dinero desea retirar?"));
} if (money>dinero) {
    alert("Saldo insuficiente")
} else {
    alert("Su saldo actual es " + (dinero - money));
}  


//EJ 2//

let dia = parseInt(prompt("Ingrese su dia de nacimiento"));
let mes = prompt("Ingrese su mes de nacimiento");

if (dia >= 21 && mes === "Marzo" || dia <=19 && mes === "Abril") {
    alert("Su signo zodiacal es Aries");
} else if (dia >= 20 && mes === "Abril" || dia <= 20 && mes === "Mayo") {
    alert("Su signo zodiacal es Tauro");
} else if (dia >= 21 && mes === "Mayo" || dia <= 20 && mes === "Junio") {
    alert("Su signo zodiacal es Geminis");
} else if (dia >= 21 && mes === "Junio" || dia <=22 && mes === "Julio") {
    alert("Su signo zodiacal es Cancer");
} else if (dia >= 23 && mes === "Julio" || dia <=22 && mes === "Agosto") {
    alert("Su signo zodiacal es Leo");
} else if (dia >= 23 && mes === "Agosto" || dia <= 22 && mes === "Septiembre") {
    alert("Su signo zodiacal es Virgo");
} else if (dia >= 23 && mes === "Septiembre" || dia <= 22 && mes === "Octubre") {
    alert("Su signo zodiacal es Libra");
} else if (dia >= 23 && mes === "Octubre" || dia <= 21 && mes === "Noviembre") {
    alert("Su signo zodiacal es Escorpio");
} else if (dia >= 22 && mes === "Noviembre" || dia <= 21 && mes === "Diciembre") {
    alert("Su signo zodiacal es Sagitario");
} else if (dia >= 22 && mes === "Diciembre" || dia <= 19 && mes === "Enero") {
    alert("Su signo zodiacal es Capricornio");
}   */



//EJ 3//

let nombre = prompt("Ingrese su nombre");
let hora = parseFloat(prompt("Ingrese la hora"));

if (hora >= 12 || hora < 19) {
    alert("Hola " + nombre + ", buenas tardes!");
} else if (hora >= 19 || hora < 5) {
    alert("Hola " + nombre + ", buenas noches!");
} else if (hora >= 5 || hora < 12) {
    alert("Hola " + nombre + ", buenos dias!");
}


