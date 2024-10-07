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



/*
Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple:
el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y
el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando
alcancemos el valor 1:4
*/
/*for(let j=0;j<=2;j++){
    for(let i=0;i<=4;i++){
        console.log(j+" : "+i)
    }
}*/

/*let i=0
while (i<=2) {
    let j=1
    while (j<=4) {
      console.log(i+" : "+j)
      j++  
    }
    i++
}*/



/*
Se trata de dibujar un triángulo rectángulo con asteriscos. El usuario tecleará un
valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número.
Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.
*/


/*let numero=parseInt(prompt("Ingrese número: "))
let cadena1=""
for(let i=1;i<=numero;i++){
    let cadena2=""
    for(let j=1;j<=i;j++){
        cadena2=cadena2+" *"
    }
     cadena1=cadena1+cadena2+"\n"
}
alert(cadena1)*/


/*
Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y
el número tecleado por el usuario. El resultado será de la forma "Los números enteros de 0 a n  suman suma"
*/

/*let numero=parseInt(prompt("Ingrese numero: "))
let suma=0
for(i=0;i<=numero;i++){
    suma =suma+i
}
alert(suma)*/



/*
Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa
deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4
*/
let numero,suma=0
for(let i=1;i<=4;i++){
    numero=parseInt(prompt("Inresese número: "))
    suma=suma+numero  
}
alert(suma/4)