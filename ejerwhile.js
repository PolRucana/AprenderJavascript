/*
Usando un bucle while escribir un script que pida un valor entero y cree una
lista con los numeros desde el 0 al valor tecleado. Luego deberá sacar esa lista 
con un alert. Los números se separarán por comas.
*/

/*let i=0
let numero=parseInt(prompt("Ingrese número"))
let l1="", l2=""
while(i<numero){
 l1=l1+i+","
 i++
}
l2 = l1 + i
alert(l2)*/

/*
Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno  
que esté fuera de ese rango deberá volver a pedir el número
*/

/*let numero = parseInt(prompt("numero: "))
while (true) {
    if (numero>=1 && numero<=5) {
        break
    } else {
        numero=parseInt(prompt("numero: "))
    }
}*/

/*let numero=6
while (numero<1 || numero>5) {
    numero=parseInt(prompt("numero: "))
}*/

/*
Un script que preguntará al usuario si desea continuar con el programa. Si el usuario
pulsa una letra n (mayúscula o minúscula), el programa finalizará. Cualquier otra 
entrada repetirá la pregunta
*/

/*let letra
while (letra!="n" && letra!="N") {
    letra=prompt("Letra: ")
}*/

/* 
Determinar si el número que teclea el usuario es primo o no. Recordar que un número 
primo es el que solo puede dividirse por si mismo y por la unidad.
*/
/*let numero = parseInt(prompt("Numero: "))
let i=1
let cantidad=0
 while (i<=numero) {
    if(numero%i==0){
        cantidad++
    }
    i++
 }
 if (cantidad==2) {
    alert("Es primo")
 }else{
    alert("no es primo")
 }*/

let numero=4,divisor=2,primo="si"
while (divisor<=numero && numero%divisor!=0) {
    divisor++
}
if(numero <=1 || divisor<numero){
    primo="no"
}
console.log("Primo: "+primo)
 /*
 Escribir un script que pida al usuario una contraseña. Si coincide con la clave definida 
 en el script le devolverá el mensaje "Acceso concedido" y si no coincide le devolverá el 
 mensaje "Acceso Denegado" . Si falla tres veces se emitirá el mensaje "Alerta, intruso"
 */

/*let pass = "hola"
let i=1
while (i<=3) {
    let cod=prompt("Ingrese contraseña: ")
    if(cod==pass){
        alert("Acceso concedido")
        break
    }else{
    alert("Acceso denegado")
    i++}
}
if (i>=4) {
    alert("Alerta intruso")
}*/


/*
En este script se pedirá al usuario que teclee un número cada vez. El proceso acaba cuando 
teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.
*/

/*let numero=1
let suma = 0
while (numero!=0) {
    numero = parseInt(prompt("Ingrese número: "))
    suma = suma + numero
}
alert(suma)*/


/*
Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el 
usuario ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo 
de los números tecleados.
*/

/*let min=0, max=0
let valor = parseInt(prompt("Ingrese numero: "))
min=valor
while (valor!=0) {
   if (valor>max) {
    max=valor
   }
   if (valor<min) {
    min=valor
   }
   valor = parseInt(prompt("Ingrese numero: "))
}
if (max==0) {
    alert("Ingrese valores")
} else {
    alert("El min es: "+min+" el max es: "+max)
}*/


/*
Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo 
números pares, en caso de que teclee un número impar el programa acabará y dirá la 
cantidad de números pares ingresados (el 0 cuenta como par).
*/

/*let cont=0
let numero=parseInt(prompt("Número: "))
while (numero%2==0) {
    cont = cont + 1
    numero=parseInt(prompt("Número: "))
}
alert("cantidad de pares: "+cont)*/


/*
Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. 
El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. 
Si teclea un valor fuera del menu se mostrará un mensaje de error y se vuelve a 
pedir un número de opción. El programa finaliza al teclear el 3.
*/

/*let opcion=0
while (opcion!=3) {
    opcion = parseInt(prompt("1- Leer datos\n2- Mostrar datos\n3- Fin"))
    if (opcion==1) {
        alert("Leer datos")
    }else if (opcion==2) {
        alert("Mostrar datos")
    }else if (opcion==3) {
        alert("Finalizado")
    }else{
        alert("error")
    }
}*/


/*
Un script pedirá al usuario que vaya tecleando números de manera repetida. cuando
 pulse 0, el programa muestra "La suma es " seguido de la suma de los números. Si 
 esta suma es par el programa se repite y si es impar el programa acaba.
*/

/*let suma = 2, numero
while (suma %2 ==0) {
    suma = 0
    numero = 1
    while (numero != 0) {
        numero=parseInt(prompt("Numero: "))
        suma = suma+numero
    }
    alert("La suma es: "+suma)
}*/