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


//EJERCICIO 7// ???

let text = prompt("Ingrese una cadena de texto");
let posicion = parseInt(prompt("Ingrese una posicion"));  


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


//EJERCICIO 12// ???

const cerveza = 100;
const jugo = 50;
const agua = 20;
let edad = parseInt(prompt("Por favor ingrese su edad"));
let bebida = prompt("Que desea tomar? Tenemos cerveza, jugo y agua");
let pago = parseInt(prompt("Con cuanto va a abonar?"));
let vueltoCerveza = pago-cerveza;
let vueltoJugo = pago-jugo;
let vueltoAgua = pago-agua;

if (edad<18 && bebida==="cerveza") {
    alert("Usted es menor de edad, por favor elija otra bebida");
} else if (edad>=18 && bebida==="cerveza" && pago<cerveza) {
    alert("Disculpe, no le alcanza para una cerveza, le recuerdo que tiene un valor de $100");
} else if (edad>=18 && bebida==="cerveza" && pago>=cerveza) {
    alert("Muchas gracias por su compra, su vuelto es " + vueltoCerveza);
} else if (edad<=99 && edad>=1 && bebida===jugo && pago<jugo) {
    alert("Disculpe, no le alcanza para un jugo, recuerde que tiene un valor de $50");
} else if (edad<=99 && edad>=1 && bebida===jugo && pago>=jugo) {
    alert("Muchas gracias por su compra, su vuelto es " + vueltoJugo);
} else if (edad<=99 && edad>=1 && bebida===agua && pago<agua) {
    alert("Disculpe, no le alcanza para el agua, le recuerdo que sale $20");
} else if(edad<=99 && edad>=1 && bebida===agua && pago>=agua) {
    alert("Muchas gracias por su compra, su vuelto es " + vueltoAgua);
}   */


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