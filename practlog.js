//#1 EL FAMOSO "FIZZ BUZZ"
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/*let newi, cadena=""
for(let i=1;i<=100;i++){
    newi = i
    if (newi%3==0 && newi%5==0) {
        newi="fizzbuzz"
    }
    if(newi%3==0){
        newi="fizz"
    }
    if (newi%5==0) {
        newi="buzz"
    }

    cadena = cadena+" "+newi+"\n"
}
console.log(cadena)*/



//#2 ¿ES UN ANAGRAMA?
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

//FORMA 1

/*const anagrama = (cadena1,cadena2) =>{

let newcadena1 = []
let newcadena2 = []
if(cadena1 == cadena2) return false
if(cadena1.length != cadena2.length) return false
for (let i = 0; i < cadena1.length; i++) {
   let valor = false
   for (let j = 0; j < cadena2.length; j++) {
    if(cadena1[i]==cadena2[j]){
        valor = true
        newcadena1.push(valor)
    }
   }
   if (valor==false) {
    newcadena1.push(valor)
   }
}
console.log(newcadena1)
for (let i = 0; i < cadena2.length; i++) {
    let valor = false
    for (let j = 0; j < cadena1.length; j++) {
     if(cadena2[i]==cadena1[j]){
         valor = true
         newcadena2.push(valor)
     }
    }
    if (valor==false) {
     newcadena2.push(valor)
    }
}
console.log(newcadena2)

let a=0,valorfinal = true
while (a<newcadena1.length) {
    if (newcadena1[a]==false || newcadena2[a]==false) {
        valorfinal=false
        a=newcadena1.length
    }
    a++
}

if(valorfinal==true){
    return true
}
return false
}

console.log(anagrama("ramor","amorr"))*/


//FORMA 2

/*const anagrama = (cadena1,cadena2) =>{
    if(cadena1 == cadena2) return false
    if(cadena1.length != cadena2.length) return false
    if(cadena1.toLowerCase().split("").sort().join() == cadena2.toLowerCase().split("").sort().join()) return true
    return false
}
console.log(anagrama("raoma","aroma"))*/

//FORMA 3

/*const anagrama = (cadena1,cadena2) =>{
    if(cadena1 == cadena2) return false
    if(cadena1.length != cadena2.length) return false

    return cadena1.toLowerCase().split("").sort().join() == cadena2.toLowerCase().split("").sort().join()
}
console.log(anagrama("raomaa","aromax"))*/



//#3 ORDENAR ARRAY DE NUMEROS DE MENOR A MAYOR A MI MANERA

/*let arr = [8,11,2,7,1,6,80,-2,-30,5,7,4,100,10000,-98,4]
for(let j=0;j<arr.length;j++){
    for(let i=0;i<arr.length;i++){
        let a=arr[i]
        let b=arr[i+1]
        if (arr[i]>arr[i+1]) {
            arr[i]=b
            arr[i+1]=a
        }
    }
}
console.log(arr)*/



//#4 COMBINAR 2 ARRAY'S ORDENADOS
/*
Implemente un algoritmo capaz de combinar dos arrays ordenandos, obteniendo
un array ordenado
- Analice el orden de su algoritmo
- Implemente un algoritmo, sin usar metodos propios de javascript
*/

/*const combinar = (arra1,arra2) =>{
    let newarr =[]
    //también puede ir el while de abajo, si uno llega a 0 te da false y corta
    //while(arra1.length && arra2.length)
    while (arra1.length!=0 && arra2.length!=0) {
        let primerelemento
        if (arra1[0]<arra2[0]) {
            primerelemento = arra1.shift()
        } else {
            primerelemento = arra2.shift()
        }
        newarr.push(primerelemento)
    }
    newarr = newarr.concat(arra1).concat(arra2)
    return newarr
}
*/



//#5 IMPLEMENTE UN ALGORITMO EL CUAL DADO UN ARRAY CUALQUIERA LO ORDENE 
//  (USAR MERGE SORT)
// Merge sort: Usa el princio de divide y venceras

/*const mergesort = (darr) =>{
    if(darr.length==1) return darr
    let mitad = Math.trunc(darr.length/2)
    let arrleft = darr.splice(0,mitad)
    let arrrigth = darr
    let myleft = mergesort(arrleft)
    let myrigth = mergesort(arrrigth)
    //usamos la funcion anterior de combinar 2 array
    return  combinar(myleft,myrigth)
}
console.log(mergesort([8,1,10,9,7,11,3,21,0]))
*/



/*#6 FIBONACCI
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
/*let arrinicial = [0,1]
const fibo = () =>{
    if(arrinicial.length == 50) return arrinicial
    let tam = arrinicial.length
    let nextarr = arrinicial[tam -1] + arrinicial[tam-2]
    arrinicial.push(nextarr)
    return fibo()
}
console.log(fibo())*/


/*# 7 NUMERO PRIMO
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

/*function primo() {
    let cadena = ""
    for(let i=2;i<=100;i++){
        let l=1,count=0
        while (l<=i & count<3) {
            if(i%l==0) count++
            l++
        }
        if(count<3){
            cadena = cadena+","+i
        }
    }
    console.log(cadena)
}
primo()
*/


/*8 AREA DE UN POLÍGONO
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

/*const poligono = (tipo,base,altura)=>{
    let area
    if (tipo=="cuadrado") {
        area = base*altura
        return area
    }
    else if(tipo=="rectangulo"){
        area = base*altura
        return area
    }
    else if(tipo=="triangulo"){
        area=(base*altura)/2
        return area
    }
    return "Datos mal ingresados"
}

console.log(poligono("triangulo",12,23))
*/
