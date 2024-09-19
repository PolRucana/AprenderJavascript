/*Usando un bucle for escribir un script que pida un valor entero y muestre
en pantalla una lista de numeros desde el 0 al valor tecleado. Los numeros de
separaran por comas*/

/*let cadena1=""
let cadena2=""
let i
let numero = parseInt(prompt("Ingrese Número: "))
for(i=0;i<numero;i++){
    cadena1 = cadena1+i+","
}
cadena2=cadena1+i
alert(cadena2)*/


/*
Se trata que dado un numero entero el script muestre una cuenta atras,
es decir, una lista de numeros separado por comas desde el numero creado
hasta el cero
*/

/*let numero=parseInt(prompt("Ingrese numero: "))
let cadena=""
for(let i=numero;i>=0;i--){
    cadena=cadena+i+","
}
alert(cadena)*/


/*
Se quiere un bucle que genere una lista con todos los numeros pares
positivos por debajo del numero tecleado por el usuario. Los numeros
se apareceran en una nueva ventana alert con cambios de linea (caracter'\n')
*/

/*let numero = parseInt(prompt("Número: "))
let cadena=""
for(let i=0;i<=numero;i++){
    if (i%2==0) {
        cadena=cadena+i+"\n"
    }
}
alert(cadena)*/



/*
Este script debe escribir la tabla de multiplicar del número que el usuario
teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la
forma a x b = ab.
*/

/*let numero=parseInt(prompt("Ingrese numero: "))
let cadena=""
for(let i=0;i<=10;i++){
    let resultado=numero*i
    let tabla=numero+" x "+i+" = "+resultado
    cadena=cadena+tabla+"\n"
}
alert(cadena)*/



/*
En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número
y el script imprimirá (console.log) todos los números menores que al dividirlos
por 3 den como resto 2.
*/

/*let numero=parseInt(prompt("Ingrese número: "))
for(let i=1;i<=numero;i++){
    if(i%3==2){
        console.log(i)
    }
}*/



/*
Este script el usuario deberá teclear una letra y un número, y el programa mostrará
una cadena formada por la letra repetida el número que haya tecleado.
*/

/*let numero=parseInt(prompt("Ingrese número: "))
let letra=prompt("Ingrese letra: ")
let cadena=""
for(i=1; i<=numero; i++){
    cadena = cadena + letra
}
console.log(cadena)*/