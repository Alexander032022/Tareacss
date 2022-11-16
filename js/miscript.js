/*  let numero = prompt("ingrese el numero que desea multiplicar")

for (let i=0; i<=12; i++){
document.write(`${numero} X ${i} = ${numero * i} <br>`)
} */


// let num1 = parseInt(prompt("Introduce el primer número: "));
// let num2 = parseInt(prompt("Introduce el segundo número: "));

// let if num2 == 0:
//     document.write ("No se puede dividir por cero.")
// let else:
//     division = num1 / num2
//     document.write (num1, "/", num2, "=", division)

/* let num1 = prompt("Ingrese un número con decimales");
let num2 = prompt("Ingrese un número entero");
let suma = parseFloat(num1) + parseFloat(num2);

document.write("El resultado de la suma es " + suma); */

/* let operacion = prompt("¿Qué operación quieres realizar? (+,-,*,/)")
let num1 = parseInt(prompt("Introduce el primer número"))
let num2 = parseInt(prompt("Introduce el segundo número"))

switch(operacion) {
  case "+":
    alert(num1 + num2)
    break
  case "-":
    alert(num1 - num2)
    break
  case "*":
    alert(num1 * num2)
    break
  case "/":
    alert(num1 / num2)
    break
  default:
    alert("La operación no existe") 
}*/


/* function tablaMultiplicar(numero) {
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
      tabla += numero + " x " + i + " = " + numero * i + "\n";
    }
    return tabla;
  }
  
  document.write(tablaMultiplicar(4)); */
/* 
  let vehiculo=prompt("Ingrese el tipo de coche: Ford Fiesta o Ford Focus")
  if(vehiculo=="Ford Fiesta"){
  document.write("El descuento del Ford Fiesta es: 5%");
  }else{
     if(vehiculo=="Ford Focus"){
     document.write("El descuento del Ford Focus es: 10%");
     }else{
        alert("No ingreso el coche correcto")
     }
  } */

/*   let num1 = parseInt(prompt("Introduzca un numero"));
  let num2 = parseInt(prompt("Introduzca otro numero"));
  if(num2 == 0){
    document.write("No se puede divir entre 0");
   }else{
    document.write(`El resultado es: ${num1/num2}`);
  } 
 */

/* let nombre=document.getElementById("nom").value; */
function suma(){
    let n1= parseInt(document.getElementById("nom1").value);
    let n2= parseInt(document.getElementById("nom2").value);
    let sum= n1+n2;
    document.getElementById("Respuesta").innerHTML= sum;
}
function saludar(){
    let nombre=document.getElementById("nom").value;
    alert("Bienvenido a las funciones" + nombre);
}

function logeo(){
    let usuario=document.getElementById("usuario").value;
    let pass=document.getElementById("pass").value;
    if(usuario=="admin" && pass=="1234"){
        alert("Ingreso autorizado");
        window.open("https://www.youtube.com/", "_self");
    }else{
        alert("Uusuario o contraseña incorrecto")
    }
}