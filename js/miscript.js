//alert("Bienvenido a JS");
//document.write("Hola JS");
//console.log("Esto en la consola")

/* let x=parseFloat(prompt("Ingrese un primer numero")); //declarar la variable x
let y=parseFloat(prompt("ingrese un segundo numeros")); //parseInt sumar enteros  parseFloat suma numeros con punto
alert("la suma es: " + (x+y));
 */
/* let nombre=prompt("Ingrese tu nombre");
alert("Bienvenido a mi pagina" + nombre + "espero que le guste"); */

//INICIO
/* let nombre;     //=prompt("ingreses su nombre");
let nota1;      //=parseInt(prompt("Ingrese Nota 1"));
let nota2;      //=parseInt(prompt("Ingrese Nota 2"));
let nota3;      //=parseInt(prompt("Ingrese Nota 3")); */
/* nombre=prompt("ingreses su nombre");
nota1=parseInt(prompt("Ingrese Nota 1"));
nota2=parseInt(prompt("Ingrese Nota 2"));
nota3=parseInt(prompt("Ingrese Nota 3"));
//PROCESO
let ptje=nota1+nota2+nota3;
let prom=ptje/3;
//SALIDA
document.write("El puntaje obtenido es: "+ptje+"<br>");
document.write("El puntaje obtenido es: "+prom); */

/* let radio=parseFloat(prompt("Ingrese radio del círculo"));
const pi=3.1416;

let areaCir=pi*(radio**2);

let respuesta=`El area del circulo es <span style="color:red;"> ${areaCir} </span>, <strong>gracias por su visita a la pagina </strong>`;

document.write(respuesta); */

let edad=parseInt(prompt("ingrese su edad"));
if(edad>=18){
    document.write("Es mayor de edad")
}else{
    document.write("Es menor de edad")
}