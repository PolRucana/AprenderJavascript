/*
Obteniendo el nombre más largo de un array

Declara un array nombres con al menos 6 nombres.
Obtén el nombre más largo del array nombres. Tener 
en cuenta que los "Strings" son listas de caracteres y que 
las listas tienen un largo (length) que indica su tamaño.
*/

/*function nombrelargo() {
    let minombre
    let arraynombres = ["Juan","Pablo","rucanasaL","John","Carlos","Alexan"]
    let mayor = arraynombres[0].length
    let lista = arraynombres.map(nombre =>{
        if(nombre.length>mayor){
            mayor=nombre.length
            minombre=nombre
        }
    })
    console.log(minombre)
    console.log(lista)
}
nombrelargo()*/


/*Crea una función que tenga dos argumentos: num1, num2, y que devuelva como 
resultado la suma de ambos números.  Se supone que se usarán solo números válidos, 
no letras o símbolos.  */

/*FORMA 1 */
/*const suma = (num1,num2) =>{
    let misuma = x
    return misuma
}
console.log(suma(1,2))*/

/*FORMA 2 */
/*const suma = (num1,num2) =>num1+num2
console.log(suma(2,2))*/


/*
Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento 
es par y falso si es impar. Se acepta que solo se usarán números válidos.
*/
/*const esPar = (num) =>{
   if(num % 2==0){
    return true
   }
   return false 
}

console.log(esPar(17))*/


/*const esPar = (num) =>{
    return (num % 2==0)
}
console.log(esPar(17))*/


/*const esPar = (num) =>(num % 2==0)
console.log(esPar(16))*/



/*
Función que calcule si un número es múltiplo de otro. La función recibirá dos 
argumentos, el primero será el supuesto mutiplo del segundo argumento.
*/

/*const mutliplo = (a,b) => (a%b==0)
console.log(mutliplo(2,2))*/



/*
Definir una función que cree una cadena de letras repetidas tantas veces como 
le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.
*/

/*const cadena = (letra,num) =>{
    let texto=""
    for(let i=0;i<num;i++){
        texto=texto+letra
    }
    return texto
}
console.log(cadena("e",4))*/



/*Usa el algoritmo de Euclides para diseñar una función que determine el máximo común 
divisor de dos números. Bueno este algoritmo es bien simple. Para clacular el mcd de A y B:

Si A = 0 entonces MCD(A,B)=B, ya que el MCD(0,B)=B, y podemos detenernos.  
Si B = 0 entonces MCD(A,B)=A, ya que el MCD(A,0)=A, y podemos detenernos.  
Calcula el resto de A/B
Asigna a A el valor de B
Asigna a B el resto
Repite hasta que A o B sean 0.*/

/*const maxcomundiv = (a,b) =>{
    if(a<b){
        let prea = a
        a=b
        b=prea
    }
    while(b != 0){
        let rest= a%b
        a=b
        b=rest
    }
    return a
}
console.log(maxcomundiv(8,0))*/


/*const maxcomdiv = (a,b) =>{
    while(b != 0){
        let rest= a%b
        a=b
        b=rest
    }
    return a
}
console.log(maxcomdiv(8,34))*/


/*const maxcodi = (a,b) =>{
    let resto,mcd
    while (a!==0 && b!==0) {
        resto = a%b
        a=b
        b=resto
    }
    if(a==0){mcd = b}
    if(b==0){mcd = a}
    
    return mcd
}
console.log(maxcodi(54,42))*/



/*
Diseña una función que calcule el factorial de un número, usa una función recursiva (que se 
llama a si misma). Recuerda que el factorial de un número es el resultado de multiplicar 
cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1
*/

/*const factorial = a =>{
    if(a==0){
        return 1
    }
    return a*factorial(a-1)
}

console.log(factorial(4))*/



/*
Escribir una función que reciba un número como argumento y lo devuelva invertido, o sea, 
escrito del revés. Usar esta función para determinar si un número es capicúa (palíndromo)
*/

/*FORMA 1*/
/*const palin = num0 =>{
    let num = num0
    let rest
    let cadena=""
    let num2 
    while (num>=10) {
        rest = num%10
        cadena = cadena+rest
        num = Math.trunc(num/10)
    }
    num2 = parseInt(cadena+num)
    if (num2 == num0) {
        return (num2+" Es palindromo")
    }

    return (num2+" No es palíndromo")
}
console.log(palin(123212))*/

/*FORMA 2*/
/*let dato
const palindromo = num =>{
    let cadena=""
    dato = num
    while (num>0) {
        cadena = cadena + num%10
        num = parseInt(num/10)
    }
    return parseInt(cadena)
}
if (palindromo(123214)==dato) {
    console.log("Es palindromo")
}else{
    console.log("No es palindromo")
}*/



/*
Escribe una función que reciba como argumento un precio y el porcentaje de impuestos. 
La función devolverá el valor total a pagar, teniendo en cuenta que al precio sin 
impuestos se le descuenta un porcentaje del 10% si es mayor de 100 euros.
*/

/*FORMA 1*/
/*const compra = (precio,impuesto) =>{
    let pagar, desc
    desc = precio - (precio*10)/100
    if (precio>100) {
        pagar = desc + (desc*impuesto)/100
    } else {
        pagar = precio + (precio*impuesto)/100
    }

    return pagar
}
 let mynum = parseInt(prompt("Numero"))
 let myimp = parseInt(prompt("Impuesto"))
 alert("Mi pago es "+compra(mynum,myimp))*/
 

 /*FORMA 2*/
/*const compra = (precio,impuesto) =>{
    if (precio>100) {
        precio = precio - (precio*10)/100
    }
    let neto = precio + (precio*impuesto)/100
    return neto
}
let mynum = parseInt(prompt("Numero"))
let myimp = parseInt(prompt("Impuesto"))
alert("Mi pago es "+compra(mynum,myimp))*/



/*
En esta función se trata de convertir notas a calificaciones literales de manera 
que menos de 5 es suspenso, un 5 es aprobado, el 6 es bine, el 7 y el 8 son notable, 
el 9 es sobresaliente y el 10 es matrícula.
*/

/*
Escibe una función que devuelva el siglo al que correponde un año que se la pasa 
como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200....
*/

const siglo = sig =>{
    let s
    if (sig%100==0) {
        s=parseInt(sig/100)        
    } else {
        s=parseInt(sig/100)+1
    }
    return s
}

let num = parseInt(prompt("número: "))
alert(siglo(num))
